import { TarjetaModal, ContenedorModal } from "../styled";
import { INoticiasNormalizadas, IModal } from "../types";
import { Dispatch, SetStateAction } from "react";
import ModalPremium from "./ModalPremium";
import ModalLibre from "./ModalLibre";
import ModalBotonCerrar from "./botones/ModalBotonCerrar";

interface IProps {
  noticia: INoticiasNormalizadas | null;
  setModal: Dispatch<SetStateAction<IModal>>;
}

const ModalNoticias = ({ noticia, setModal }: IProps) => {
  return (
    <>
      {noticia && (
        <ContenedorModal>
          <TarjetaModal>
            <ModalBotonCerrar setModal={setModal} />
            {noticia.esPremium ? (
              <ModalPremium setModal={setModal} />
            ) : (
              <ModalLibre noticia={noticia} />
            )}
          </TarjetaModal>
        </ContenedorModal>
      )}
    </>
  );
};

export default ModalNoticias;