

function App() {
	return (
		<div className="wrapper">
			<header className="flex  justify-between items-center p-10" >
				<div className="flex items-center">
					<img className=" mr-4" width={40} height={40} src="img/logo.png" alt="logo" />
					<div className="">
						<h3 className="m-0 not-italic font-bold text-xl leading-6 uppercase text-black">REACT SNEAKERS</h3>
						<p className="not-italic font-normal text-sm leading-4 text-gray-500">Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="flex">
					<li className=" mr-8">
						<img className="inline mr-3" width={18} height={18} src="img/Card.svg" alt="Card" /><span className="not-italic font-semibold text-sm leading-4 text-gray-700">1205 руб.</span>
					</li>
					<li>
						<img className="inline" width={18} height={18} src="img/User.svg" alt="User" />
					</li>
					<li>
						<a href="https://github.com/AlexandrOvcharov/React-Sneakers">Git HUB<img className="inline m-1" width={18} height={18} src="img/github.svg" alt="User" /></a>
					</li>
				</ul>
			</header>

			<div className="content p-10">
				<h1 className="not-italic font-bold text-3xl leading-10 text-black mb-10">Все кроссовки</h1>

				<div className="snekears flex gap-10 justify-center">

					<div className="bg-white border w-[210px] h-[260px] rounded-[40px] p-6 transition-shadow hover:shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
						<img className=" mx-auto" width={133} height={112} src="img/card-img.jpg" alt="card" />
						<p className="font-normal text-sm leading-4 text-black my-3">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="flex justify-between items-center">
							<div className=" flex flex-col">
								<p className="font-medium leading-3 uppercase text-gray-500 text-[11px]">Цена:</p>
								<b className="font-bold text-sm leading-4 text-black">12 990тенге.</b>
							</div>
							<button className="bg-white border border-[#F2F2F2] rounded-lg p-2 h-8 w-8">
								<img width={11} height={11} src="img/card-button-plus.svg" alt="plus" />
							</button>
						</div>
					</div>

					<div className="bg-white border w-[210px] h-[260px] rounded-[40px] p-6 transition-shadow hover:shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
						<img className=" mx-auto" width={133} height={112} src="img/card-img.jpg" alt="card" />
						<p className="font-normal text-sm leading-4 text-black my-3">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="flex justify-between items-center">
							<div className=" flex flex-col">
								<p className="font-medium leading-3 uppercase text-gray-500 text-[11px]">Цена:</p>
								<b className="font-bold text-sm leading-4 text-black">12 990тенге.</b>
							</div>
							<button className="bg-white border border-[#F2F2F2] rounded-lg p-2 h-8 w-8">
								<img width={11} height={11} src="img/card-button-plus.svg" alt="plus" />
							</button>
						</div>
					</div>

					<div className="bg-white border w-[210px] h-[260px] rounded-[40px] p-6 transition-shadow hover:shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
						<img className=" mx-auto" width={133} height={112} src="img/card-img.jpg" alt="card" />
						<p className="font-normal text-sm leading-4 text-black my-3">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="flex justify-between items-center">
							<div className=" flex flex-col">
								<p className="font-medium leading-3 uppercase text-gray-500 text-[11px]">Цена:</p>
								<b className="font-bold text-sm leading-4 text-black">12 990тенге.</b>
							</div>
							<button className="bg-white border border-[#F2F2F2] rounded-lg p-2 h-8 w-8">
								<img width={11} height={11} src="img/card-button-plus.svg" alt="plus" />
							</button>
						</div>
					</div>

					<div className="bg-white border w-[210px] h-[260px] rounded-[40px] p-6 transition-shadow hover:shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
						<img className=" mx-auto" width={133} height={112} src="img/card-img.jpg" alt="card" />
						<p className="font-normal text-sm leading-4 text-black my-3">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="flex justify-between items-center">
							<div className=" flex flex-col">
								<p className="font-medium leading-3 uppercase text-gray-500 text-[11px]">Цена:</p>
								<b className="font-bold text-sm leading-4 text-black">12 990тенге.</b>
							</div>
							<button className="bg-white border border-[#F2F2F2] rounded-lg p-2 h-8 w-8">
								<img width={11} height={11} src="img/card-button-plus.svg" alt="plus" />
							</button>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
}

export default App;
