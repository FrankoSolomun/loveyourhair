import { twoDecimals } from '@/components/format';
import { fromImageToUrl, API_URL } from '../../components/urls'



const Product = ({products}) => {
    return (
        <div>
          <h2>{products.attributes.title}</h2>
          <p>{products.attributes.description}</p>
          <p>{twoDecimals(products.attributes.price)} kn</p>
          <img src={fromImageToUrl(products.attributes.image.data.attributes)} className='w-[200px] h-[200px]'/>
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