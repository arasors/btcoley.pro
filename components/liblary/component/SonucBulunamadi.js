import {FiAlertCircle} from "@react-icons/all-files/fi/FiAlertCircle";
import {Translate} from "components/controllers";

export default function SonucBulunamadi(props){
    return (
        <div id="sonuc-bulunamadi" {...props}>
            <FiAlertCircle className="ico" />
            <span>{Translate('sonuc_bulunamadi')}</span>
        </div>
    )
}