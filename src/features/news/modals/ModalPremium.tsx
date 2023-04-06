import BotonSubscripcion from "./botones/BotonSubscripcion";
import { SuscribeImage } from "../../../assets";
import { IModal } from "../types";
import { Dispatch, SetStateAction } from "react";
import {
  DescripcionModal,
  ImagenModal,
  TituloModal,
  CotenedorTexto,
} from "../styled";

interface IProps {
  setModal: Dispatch<SetStateAction<IModal>>;
}

const ModalPremium = ({ setModal }: IProps) => {
  return (
    <>
      <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
      <CotenedorTexto>
        <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
        <DescripcionModal>
          Suscríbete a nuestro newsletter y recibe noticias de nuestros
          personajes favoritos.
        </DescripcionModal>
        <BotonSubscripcion setModal={setModal} />
      </CotenedorTexto>
    </>
  );
};
export default ModalPremium;