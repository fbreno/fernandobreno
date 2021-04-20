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

const staticDate = new Date();
const staticdateString = staticDate.toGMTString();
return{
    props:{
        staticdateString
    }}


    export default Tempo;