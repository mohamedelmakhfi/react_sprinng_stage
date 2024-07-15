import { FunctionComponent } from "react";
import styles from "./FooterSeaWireFooter.module.css";

export type FooterSeaWireFooterType = {
  className?: string;
};

const FooterSeaWireFooter: FunctionComponent<FooterSeaWireFooterType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footerseawireFooter07, className].join(" ")}>
      <div className={styles.footerInner}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumnsParent}>
            <div className={styles.footerColumns}>
              <div className={styles.contactInfo}>
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
                <div className={styles.phonePlaceholder}>+1 386-688-3295</div>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.homeLinkContainer}>
                <div className={styles.accueil}>Accueil</div>
              </div>
              <div className={styles.pageLinks}>
                <div className={styles.pageLinksContainer}>
                  <div className={styles.pageLinkItems}>
                    <div className={styles.logoAndName}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-11.svg"
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
                  <div className={styles.aboutContact}>
                    <div className={styles.aboutContactLinks}>
                      <div className={styles.aPropos}>A propos</div>
                      <div className={styles.servicesParent}>
                        <div className={styles.services}>Services</div>
                      </div>
                      <div className={styles.contact}>{`Contact `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.socialMedia}>
                  <div className={styles.socialMediaIcons}>
                    <div className={styles.socialPlatforms}>
                      <div className={styles.socialIconShapes} />
                      <b className={styles.fb}>FB</b>
                    </div>
                    <div className={styles.socialPlatforms1}>
                      <div className={styles.socialPlatformsChild} />
                      <b className={styles.in}>IN</b>
                    </div>
                    <div className={styles.socialPlatforms2}>
                      <div className={styles.socialPlatformsItem} />
                      <b className={styles.lik}>Lik</b>
                    </div>
                    <div className={styles.socialPlatforms3}>
                      <div className={styles.socialPlatformsInner} />
                      <b className={styles.tw}>Tw</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.newsletterSignup}>
                <b className={styles.rejoignezNous}>Rejoignez nous !</b>
                <div className={styles.emailInput}>
                  <div className={styles.emailField}>
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
                  <div className={styles.submitButtonParent}>
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
    </footer>
  );
};

export default FooterSeaWireFooter;
