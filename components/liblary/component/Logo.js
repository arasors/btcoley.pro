import Image from "next/future/image";

export function Logo(props){
    return <Image id="logo" src={require(`public/svg/${props.theme}-logo.svg`)} {...props} />
}