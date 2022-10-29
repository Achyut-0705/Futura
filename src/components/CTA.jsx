import styles from "../styles/components/CTA.module.scss";

function CTA({ text = "CTA", ...rest }) {
  return (
    <button {...rest} className={styles.wrapper}>
      {text}
    </button>
  );
}

export default CTA;
