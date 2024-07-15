import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.vectorParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <div className={styles.footerseawireFooter07}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.frameParent}>
              <div className={styles.addressContentWrapper}>
                <div className={styles.addressContent}>
                  <div className={styles.address}>
                    <img
                      className={styles.communicationLocationOn}
                      loading="lazy"
                      alt=""
                      src="/communication--location-on@2x.png"
                    />
                    <div className={styles.ohioStSouthGateCa90280Wrapper}>
                      <div className={styles.ohioStSouthContainer}>
                        <p className={styles.ohioStSouth}>
                          8819 Ohio St. South Gate,
                        </p>
                        <p className={styles.ca90280}>CA 90280</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.email}>
                    <img
                      className={styles.communicationEmail}
                      loading="lazy"
                      alt=""
                      src="/communication--email@2x.png"
                    />
                    <div className={styles.ourstudiohellocomWrapper}>
                      <div className={styles.ourstudiohellocom}>
                        Ourstudio@hello.com
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.outlinedCommunicationCal}
                    loading="lazy"
                    alt=""
                    src="/outlined--communication--call@2x.png"
                  />
                  <div className={styles.div}>+1 386-688-3295</div>
                </div>
              </div>
              <div className={styles.homeLinkContainerParent}>
                <div className={styles.homeLinkContainer}>
                  <div className={styles.accueil}>Accueil</div>
                </div>
                <div className={styles.qdiLiContainerParent}>
                  <div className={styles.qdiLiContainer}>
                    <div className={styles.qdiLiContent}>
                      <div className={styles.qdiLiLogo}>
                        <img
                          className={styles.logoImageLeft}
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className={styles.logoImageLeft1}
                          alt=""
                          src="/vector-1.svg"
                        />
                        <img
                          className={styles.groupIcon}
                          loading="lazy"
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <h3 className={styles.qdiligharad}>QdiLiGharad</h3>
                    </div>
                    <div className={styles.menuLinks}>
                      <div className={styles.menuLinksContainer}>
                        <div className={styles.aPropos}>A propos</div>
                        <div className={styles.servicesLink}>
                          <div className={styles.services}>Services</div>
                        </div>
                        <div className={styles.contact}>{`Contact `}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.socialLinksContainerWrapper}>
                    <div className={styles.socialLinksContainer}>
                      <div className={styles.socialIcons}>
                        <div className={styles.socialIconBackgrounds} />
                        <b className={styles.fb}>FB</b>
                      </div>
                      <div className={styles.socialIcons1}>
                        <div className={styles.socialIconsChild} />
                        <b className={styles.in}>IN</b>
                      </div>
                      <div className={styles.socialIcons2}>
                        <div className={styles.socialIconsItem} />
                        <b className={styles.lik}>Lik</b>
                      </div>
                      <div className={styles.socialIcons3}>
                        <div className={styles.socialIconsInner} />
                        <b className={styles.tw}>Tw</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newsletterContainerWrapper}>
                <div className={styles.newsletterContainer}>
                  <b className={styles.rejoignezNous}>Rejoignez nous !</b>
                  <div className={styles.newsletterForm}>
                    <div className={styles.emailInput}>
                      <div className={styles.yourEmail}>Your Email</div>
                      <div className={styles.form}>
                        <div className={styles.container} />
                        <input
                          className={styles.enterYourEmail}
                          placeholder="Enter Your Email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.subscribeButtonContainer}>
                      <div className={styles.button}>
                        <div className={styles.elementbuttonsmallfilledCo}>
                          <div className={styles.bg} />
                          <div className={styles.buttonLabel}>Inscription</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.dividerIcon}
            loading="lazy"
            alt=""
            src="/divider.svg"
          />
        </div>
        <div className={styles.communicationCall} />
        <div className={styles.copyright2024QdiligharadWrapper}>
          <div className={styles.copyrightContainer}>
            <span>{`Copyright : © 2024 `}</span>
            <span className={styles.qdiligharad1}>QdiLiGharad</span>
            <span>. Tous droits réservés.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
