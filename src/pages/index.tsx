import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import userAvatarImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

interface HomeParams {
	poolCount: number
	guessesCount: number
	usersCount: number
}

export default function Home({ poolCount, guessesCount, usersCount }: HomeParams) {
	
	const [ poolTitle, setPoolTitle ] = useState('')
	
	async function handleCreatePoll(event: FormEvent) {
		event.preventDefault()
		try {
			const response = await api.post('/pools', {
				title: poolTitle
			})
			const { code } = response.data
			
			await navigator.clipboard.writeText(code)
			alert('Bolão criado com sucesso, o código foi copiado para a área de transferência!')
			setPoolTitle('')
		}
		catch (err) {
			console.log(err)
			alert('Erro ao criar bolão, tente novamente!')
			setPoolTitle('')
		}
	}
	
	return (
		<div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
			<main>
				<Image src={logoImg} alt="Copa 2022" />
				<h1 className="text-white mt-14 text-5xl font-bold leading-tight">
					Crie seu próprio bolão da copa e compartilhe entre amigos!
				</h1>
				
				<div className="mt-10 flex items-center gap-2">
					<Image src={userAvatarImg} alt="users" />
					<strong className="text-gray-100 text-xl">
						<span className="text-greenCopa-500 ">+{usersCount}</span> pessoas já estão
						                                                           usando
					</strong>
				</div>
				
				<form onSubmit={handleCreatePoll} className="mt-10 flex gap-2">
					<input
						className="flex-1 px-6 py-4 rounded text-sm text-gray-400 bg-gray-800 border border-gray-600"
						type="text"
						placeholder="Qual o nome do seu bolão"
						onChange={event => setPoolTitle(event.target.value)}
						value={poolTitle}
						required
					/>
					<button
						className="bg-yellowCopa-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellowCopa-700 transition duration-500"
						type="submit">
						Criar bolão
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-300 leading-relaxed">
					Após criar o bolão, você receberá um link para compartilhar com seus
					amigos.
				</p>
				
				<div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100 ">
					<div className="flex items-center px-1 gap-6">
						<Image src={iconCheckImg} alt="check" />
						<div className="flex flex-col">
							<span className="text-2xl font-bold">+{poolCount}</span>
							Bolões Criados
						</div>
					</div>
					<div className="w-px h-14 bg-gray-600"></div>
					<div className="flex items-center px-1 gap-6">
						<Image src={iconCheckImg} alt="check" />
						<div className="flex flex-col">
							<span className="text-2xl font-bold">+{guessesCount}</span>Palpites
							                                                           Enviados
						</div>
					</div>
				</div>
			</main>
			<Image
				src={appPreviewImg}
				alt="Dois celulares exibindo uma prévia da aplicação movel do Bolão Copa 2022"
				className="logo"
				quality={100}
			/>
		</div>
	)
}

export const getServerSideProps = async () => {
	const poolCountResponse = await api.get('/pools/count')
	const guessesCountResponse = await api.get('/guesses/count')
	const usersCountResponse = await api.get('/users/count')
	
	
	return {
		props: {
			poolCount: poolCountResponse.data.count,
			guessesCount: guessesCountResponse.data.count,
			usersCount: usersCountResponse.data.count
		}
	}
}
