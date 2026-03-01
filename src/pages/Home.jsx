import Card from '../components/card';
import instruments from '../data/instruments.json';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center max-w-[100%]">
            <h1 className="text-3xl text-center text-white p-10">Selecciona tu Instrumento</h1>
            <div className="flex flex-wrap justify-center gap-10">
                {instruments.map(instrument => (
                    <Card key={instrument.id} id={instrument.id} image={instrument.image} title={instrument.name} />
                ))}
            </div>
        </div>
    )
}
export default Home;