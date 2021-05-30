import './ConfMsg.scss';

const ConfMsg = () => {
  return (
    <div id="confCard">
      <div id="cardText">
        <div id="portada" />
        <div id="titleTotal">
          <div id="titlez">Project Sakura</div>
          <h2>Hello!</h2>

          <div id="desc">
            Your consultation has been booked. Our team will reach out to you
            via mail shortly. For any queries, contact us at
            helpline@projectsakura.com.
          </div>
          <div id="actionz">
            <button id = "buton">
              <i class="fa fa-envelope-o"></i>
            </button>
            <button id = "buton">
              <i class="fa fa-user"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfMsg;