
export default function Images(props) {
    const {details}=props;
    return ( 
      <img
        className={details.class ? details.class : ''}
        src={details.url.src}
        alt={details.text}
      />
    );
  }git