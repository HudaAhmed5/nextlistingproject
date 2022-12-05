import styles from '../../styles/ninjas.module.css'
import Link from 'next/link';
export const getStaticProps= async ()=> {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json()
 return {
    props : {ninjas :data}
 }
}
const Ninjas = ({ninjas}) => {
    return ( <>
        <h1>
            All Ninjas</h1>
            {ninjas.map(ninja=> (
                <Link href={'/ninjas/'+ ninja.id} key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </div>
                </Link>
            ))}

    </> );
}
 
export default Ninjas;