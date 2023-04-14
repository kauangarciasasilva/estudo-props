interface Props{
    alert:any;
    laranja:string;
}

export default function ObterComponents(props:Props){

    return(
        <div style={{backgroundColor :'green'}}>
            <h1>obterComponents</h1>
        <span>props:param</span>
        </div>
    )
    }