function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{dynamicDateString}(dinâmico)</div>
            <div>{props.staticDateString}(estatico)</div>
        </div>
    
    )

}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticdateString = staticDate.toGMTString();

    return{
        props:{
            staticdateString
        },
        revalidate:1
    }
}


    export default Tempo;