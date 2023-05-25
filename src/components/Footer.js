

const styles = {
  iconSize: {
    fontSize: '36px'
  },
  black: {
    fontSize: '36px',
    color: 'black'
  }
}

function Footer() {
  return(
    <div className="d-flex justify-content-center mt-5">
      <a href="https://www.linkedin.com/in/carter-michaud-612505250/"><i className="fa fa-linkedin-square mx-2" style={styles.iconSize}></i></a>
      <a href="https://github.com/Cmeesh11"><i className="fa fa-github mx-2" style={styles.black}></i></a>
    </div>
  );
}

export default Footer;