import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.commentCaMarcheContainerWrapper, className].join(" ")}
    >
      <div className={styles.commentCaMarcheContainer}>
        <div className={styles.commentCaMarcheTitleContaiWrapper}>
          <div className={styles.commentCaMarcheTitleContai}>
            <b className={styles.commentAMarche}>Comment ça marche ?</b>
          </div>
        </div>
        <div className={styles.etapesContainerParent}>
          <div className={styles.etapesContainer}>
            <div className={styles.etapesRows}>
              <div className={styles.emptyEtapesWrapper}>
                <b className={styles.emptyEtapes}>1</b>
              </div>
              <div className={styles.etapesTitlesCols}>
                <div className={styles.tape1}>Étape 1</div>
                <div className={styles.crezUnCompte}>Créez un compte</div>
              </div>
            </div>
            <div className={styles.etapesRows1}>
              <div className={styles.wrapper}>
                <b className={styles.b}>1</b>
              </div>
              <div className={styles.tape2Parent}>
                <div className={styles.tape2}>Étape 2</div>
                <div className={styles.postezVotreDemande}>
                  Postez votre demande
                </div>
              </div>
            </div>
            <div className={styles.etapesRows2}>
              <div className={styles.container}>
                <b className={styles.b1}>1</b>
              </div>
              <div className={styles.tape3Parent}>
                <div className={styles.tape3}>Étape 3</div>
                <div className={styles.choisissezUnPrestataire}>
                  Choisissez un prestataire
                </div>
              </div>
            </div>
            <div className={styles.etapesRows3}>
              <div className={styles.frame}>
                <b className={styles.b2}>1</b>
              </div>
              <div className={styles.tape4Parent}>
                <div className={styles.tape4}>Étape 4</div>
                <div className={styles.suivezLavancementEt}>
                  Suivez l'avancement et validez
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
