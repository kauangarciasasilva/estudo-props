import ObterComponents from "./obter-components copy";

interface Props{
    alert:any;
    laranja:string;
}

export default function TestComponents(props:Props){

    return(
        <div style={{backgroundColor :'blue'}}>
            <h1>TestComponents</h1>
        <span>props:laranja</span>
        <ObterComponents laranja={props.laranja} alert={undefined} />
        </div>
    )
    }