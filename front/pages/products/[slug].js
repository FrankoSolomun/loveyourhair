import { twoDecimals } from '@/components/format';
import { fromImageToUrl, API_URL } from '../../components/urls'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Random4 from '../../components/random4'



const Product = ({products}) => {
    
    return (
        <div>
            <Menu />
          <div className='w-full h-full flex items-center justify-center mt-[65px] pb-[120px]'>
              <div className='max-w-[1680px] flex flex-col lg:flex-row justify-between items-center pt-[75px] mx-[20px] md:mx-[50px] lg:mx-0'>
                  <img src={fromImageToUrl(products.attributes.image.data.attributes)} className='lg:w-[430px] xl:w-[550px] 3xl:w-[550px] 4xl:w-[600px] 5xl:w-[700px]  border-2 border-black  lg:ml-[50px]'/>
                  <div className='lg:ml-[50px] mt-[30px] lg:mt-0 3xl:ml-[100px] lg:mr-[50px]'>
                      <div>
                          <h2 className='font-poppins text-[40px] lg:text-[50px] 3xl:text-[75px] 5xl:text-[90px] font-medium'>{products.attributes.title}</h2>
                          <div className='w-full h-px bg-gray-300' />
                      </div>
                      <p className='font-poppins text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600 mt-[15px] mb-[20px] 3xl:mb-[30px]'>{products.attributes.description}</p>
                      <p className='font-poppins text-[17px] lg:text-[19px] xl:text-[21px] 3xl:text-[23px] 5xl:text-[25px] text-black mb-[60px]'>{products.attributes.text}</p>
                      <div className='flex space-x-3 items-center'>
                          <p className='text-[31px] font-medium leading-[1]'>{twoDecimals(products.attributes.price)} €</p>
                          <p className='text-[25px] text-gray-400 leading-[1]'>{twoDecimals(products.attributes.pricehrk)} KN</p>
                        </div>
                  </div>
              </div>
          </div>
            <Random4 />
            <Footer />
        </div>
    )
}

export async function getStaticProps({params}){
    console.log(`${API_URL}/api/products?populate=*&filters[slug]=${params.slug}`)
    const product_res = await fetch(`${API_URL}/api/products?populate=*&filters[slug]=${params.slug}`);
    const found = await product_res.json()

    return {
        props: {
            products: found.data[0]
        },
    }
} 

export async function getStaticPaths() {
    const products_res = await fetch(`${API_URL}/api/products?populate=*`);
    const products = await products_res.json()

    return {
        paths: products.data.map(el => ({
            params: { slug: String(el.attributes.slug) }
        })),
        fallback: false
    }
}

export default Product