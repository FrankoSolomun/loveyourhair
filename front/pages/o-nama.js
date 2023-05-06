import Menu from '../components/Menu';
import Slider2 from '../components/Slider2';
import Footer from '@/components/Footer';


export default function Onama() {
    return (
        <div className='w-full h-full xl:h-full relative'>
            <Menu />
            <div className='h-full xl:h-screen w-full relative flex flex-col xl:flex-row'>
                <Slider2 />
                <div className='flex flex-col mt-[50px] lg:mt-[100px] xl:mt-[150px] mx-[20px] lg:mx-[50px] z-10 '>
                    <h1 className='text-[40px] lg:text-[60px] 2xl:text-[70px] 4xl:text-[80px] font-poppins font-bold text-stone-800' >O nama</h1>
                    <p className='text-black text-[22px] lg:text-[24px] 2xl:text-[26px] 4xl:text-[28px] mt-[10px] leading-[1.2] max-w-[800px]'><span className='font-semibold'>Love Your Hair</span> je ovlašteni Selective Professional partner duže od 20 godina. U našem dugogodišnjem radu sa frizerskim salonima stekli smo na
                        stotine zadovoljnih klijenata.</p>
                    <p className='text-black text-[22px] lg:text-[24px] 2xl:text-[26px] 4xl:text-[28px] mt-[30px] leading-[1.2] max-w-[800px]'><span className='font-semibold'>Selective Professional</span>, ekskluzivni Talijanski brend, spada u sami vrh
                        svjetskih brendova koji brine o zdravlju i ljepoti kose.</p>
                    <p className='text-black text-[22px] lg:text-[24px] 2xl:text-[26px] 4xl:text-[28px] mt-[30px] leading-[1.2] max-w-[800px]'>U ponudi su nam još renomirani brendovi za kosu Kezy i Biopoint te
                        profesionalni uređaji marki Babyliss, Moser i Parlux.</p>
                    <p className='text-black text-[22px] lg:text-[24px] 2xl:text-[26px] 4xl:text-[28px] mt-[30px] leading-[1.2] max-w-[800px] mb-[100px]'>U toku smo sa svim sjetskim trendovima i ponosimo se kvalitetom
                        naših proizvoda i usluga. Vjerujemo da svatko zaslužuje imati zdravu i
                        lijepu kosu te je naš moto:<br/> <span className='italic text-gray-600'>"Samo zdrava kosa je lijepa kosa!"</span></p>
                </div>
            </div>
        </div>
    );
}