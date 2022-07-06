import Image from "next/future/image";
import AppJSON from "package.json"

export function Logo(props){
    return <Image id="logo" src={require(`public/svg/${props.theme}-logo.svg`)} {...props} alt={AppJSON.title} />
}
export function LogoIcon(props){
    return <Image id="logo" src={require(`public/svg/${props.theme}-ico.svg`)} {...props} alt={AppJSON.title} />
}