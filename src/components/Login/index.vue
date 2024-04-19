<template>
  <div>
    <div class="content-login">
      <div class="content-login__container">
        <div class="logo-content">
          <div class="logo-img">
            <img alt="Vue logo" src="@/assets/logo.png" height="200" />
          </div>
        </div>
        <div class="principal-text">
          <h1 class="principal-text__title">Sing in to Talker</h1>
          <div class="principal-text__description">
            <h3>Please confirm your country and <br> enter your phone number.</h3>
          </div>
        </div>
        <div class="input-container">
          <div class="input-container__content">
            <label for="country"></label>
            <select name="pais" id="country" v-model="selectedCountry" @change="searchCode">
              <option value="AF">Afganistán</option>
              <option value="AL">Albania</option>
              <option value="DE">Alemania</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antártida</option>
              <option value="AG">Antigua y Barbuda</option>
              <option value="AN">Antillas Holandesas</option>
              <option value="SA">Arabia Saudí</option>
              <option value="DZ">Argelia</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaiyán</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrein</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BE">Bélgica</option>
              <option value="BZ">Belice</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermudas</option>
              <option value="BY">Bielorrusia</option>
              <option value="MM">Birmania</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia y Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brasil</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="BT">Bután</option>
              <option value="CV">Cabo Verde</option>
              <option value="KH">Camboya</option>
              <option value="CM">Camerún</option>
              <option value="CA">Canadá</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CY">Chipre</option>
              <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comores</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, República Democrática del</option>
              <option value="KR">Corea</option>
              <option value="KP">Corea del Norte</option>
              <option value="CI">Costa de Marfíl</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croacia (Hrvatska)</option>
              <option value="CU">Cuba</option>
              <option value="DK">Dinamarca</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egipto</option>
              <option value="SV">El Salvador</option>
              <option value="AE">Emiratos Árabes Unidos</option>
              <option value="ER">Eritrea</option>
              <option value="SI">Eslovenia</option>
              <option value="ES">España</option>
              <option value="US">Estados Unidos</option>
              <option value="EE">Estonia</option>
              <option value="ET">Etiopía</option>
              <option value="FJ">Fiji</option>
              <option value="PH">Filipinas</option>
              <option value="FI">Finlandia</option>
              <option value="FR">Francia</option>
              <option value="GA">Gabón</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GD">Granada</option>
              <option value="GR">Grecia</option>
              <option value="GL">Groenlandia</option>
              <option value="GP">Guadalupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GY">Guayana</option>
              <option value="GF">Guayana Francesa</option>
              <option value="GN">Guinea</option>
              <option value="GQ">Guinea Ecuatorial</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="HT">Haití</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungría</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IQ">Irak</option>
              <option value="IR">Irán</option>
              <option value="IE">Irlanda</option>
              <option value="BV">Isla Bouvet</option>
              <option value="CX">Isla de Christmas</option>
              <option value="IS">Islandia</option>
              <option value="KY">Islas Caimán</option>
              <option value="CK">Islas Cook</option>
              <option value="CC">Islas de Cocos o Keeling</option>
              <option value="FO">Islas Faroe</option>
              <option value="HM">Islas Heard y McDonald</option>
              <option value="FK">Islas Malvinas</option>
              <option value="MP">Islas Marianas del Norte</option>
              <option value="MH">Islas Marshall</option>
              <option value="UM">Islas menores de Estados Unidos</option>
              <option value="PW">Islas Palau</option>
              <option value="SB">Islas Salomón</option>
              <option value="SJ">Islas Svalbard y Jan Mayen</option>
              <option value="TK">Islas Tokelau</option>
              <option value="TC">Islas Turks y Caicos</option>
              <option value="VI">Islas Vírgenes (EEUU)</option>
              <option value="VG">Islas Vírgenes (Reino Unido)</option>
              <option value="WF">Islas Wallis y Futuna</option>
              <option value="IL">Israel</option>
              <option value="IT">Italia</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japón</option>
              <option value="JO">Jordania</option>
              <option value="KZ">Kazajistán</option>
              <option value="KE">Kenia</option>
              <option value="KG">Kirguizistán</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="LA">Laos</option>
              <option value="LS">Lesotho</option>
              <option value="LV">Letonia</option>
              <option value="LB">Líbano</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lituania</option>
              <option value="LU">Luxemburgo</option>
              <option value="MK">Macedonia, Ex-República Yugoslava de</option>
              <option value="MG">Madagascar</option>
              <option value="MY">Malasia</option>
              <option value="MW">Malawi</option>
              <option value="MV">Maldivas</option>
              <option value="ML">Malí</option>
              <option value="MT">Malta</option>
              <option value="MA">Marruecos</option>
              <option value="MQ">Martinica</option>
              <option value="MU">Mauricio</option>
              <option value="MR">Mauritania</option>
              <option value="YT">Mayotte</option>
              <option value="MX">México</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldavia</option>
              <option value="MC">Mónaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MZ">Mozambique</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Níger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk</option>
              <option value="NO">Noruega</option>
              <option value="NC">Nueva Caledonia</option>
              <option value="NZ">Nueva Zelanda</option>
              <option value="OM">Omán</option>
              <option value="NL">Países Bajos</option>
              <option value="PA">Panamá</option>
              <option value="PG">Papúa Nueva Guinea</option>
              <option value="PK">Paquistán</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Perú</option>
              <option value="PN">Pitcairn</option>
              <option value="PF">Polinesia Francesa</option>
              <option value="PL">Polonia</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="UK">Reino Unido</option>
              <option value="CF">República Centroafricana</option>
              <option value="CZ">República Checa</option>
              <option value="ZA">República de Sudáfrica</option>
              <option value="DO">República Dominicana</option>
              <option value="SK">República Eslovaca</option>
              <option value="RE">Reunión</option>
              <option value="RW">Ruanda</option>
              <option value="RO">Rumania</option>
              <option value="RU">Rusia</option>
              <option value="EH">Sahara Occidental</option>
              <option value="KN">Saint Kitts y Nevis</option>
              <option value="WS">Samoa</option>
              <option value="AS">Samoa Americana</option>
              <option value="SM">San Marino</option>
              <option value="VC">San Vicente y Granadinas</option>
              <option value="SH">Santa Helena</option>
              <option value="LC">Santa Lucía</option>
              <option value="ST">Santo Tomé y Príncipe</option>
              <option value="SN">Senegal</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leona</option>
              <option value="SG">Singapur</option>
              <option value="SY">Siria</option>
              <option value="SO">Somalia</option>
              <option value="LK">Sri Lanka</option>
              <option value="PM">St Pierre y Miquelon</option>
              <option value="SZ">Suazilandia</option>
              <option value="SD">Sudán</option>
              <option value="SE">Suecia</option>
              <option value="CH">Suiza</option>
              <option value="SR">Surinam</option>
              <option value="TH">Tailandia</option>
              <option value="TW">Taiwán</option>
              <option value="TZ">Tanzania</option>
              <option value="TJ">Tayikistán</option>
              <option value="TF">Territorios franceses del Sur</option>
              <option value="TP">Timor Oriental</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad y Tobago</option>
              <option value="TN">Túnez</option>
              <option value="TM">Turkmenistán</option>
              <option value="TR">Turquía</option>
              <option value="TV">Tuvalu</option>
              <option value="UA">Ucrania</option>
              <option value="UG">Uganda</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistán</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
              <option value="YU">Yugoslavia</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabue</option>
            </select>
          </div>
          <div class="input-container__content d-flex justify-center">
            <label for="phone"></label>
            <input type="text" class="phonecode" v-model="phoneCode">
            <input type="text" id="phone" class="phone_number" v-model="phoneNumber" >
          </div>
        </div>
        <div class="button-container">
          <div id="sign-in-button"></div>
          <button @click="loginWithPhoneNumber()">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import firebase from '@/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const selectedCountry = ref<string>('VE');
    const phoneCode = ref<string>('+58');
    const phoneNumber = ref<string>('4126069512');
    const searchCode = async (): Promise<void> => {
      try {
        const response: any = await fetch(`https://restcountries.com/v3.1/alpha/${selectedCountry.value}`);
        const countryPhonecode: any[] = await response.json();
        const [firstResult] = countryPhonecode;
        phoneCode.value = `${firstResult.idd.root}${firstResult.idd.suffixes[0]}`;
      } catch (error) {
        console.log(error.message);
      }
    };
    const loginWithPhoneNumber = async (): Promise<void> => {
      try {
        const loginPhoneNumber = `${phoneCode.value}${phoneNumber.value}`;
        const appVerifier = window.recaptchaVerifier;
        const result = await signInWithPhoneNumber(firebase.auth, loginPhoneNumber, appVerifier);
        if (result) {
          window.confirmationResult = result;
          router.push('/validate-code');
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      window.recaptchaVerifier = new RecaptchaVerifier(firebase.auth, 'sign-in-button', {
        size: 'invisible',
      });
    });
    return {
      selectedCountry,
      phoneCode,
      phoneNumber,
      searchCode,
      loginWithPhoneNumber,
    };
  },
  name: 'LoginComponent',
});
</script>
<style scoped lang="scss">
  .d-flex{
    display: flex;
  }
  .justify-center{
    justify-content: center;
  }
  .phonecode{
    width: 25%!important;
    padding:12px 15px!important;
  }
  .phone_number{
    margin-left: -15px ;
    width: 70%!important;
    padding:12px 15px!important;
    padding-left: 5px!important;
  }
  .content-login{
    background: #212121;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .content-login__container{
    width: 22%;
  }
  .principal-text{
    margin-top: 30px;
  }
  .principal-text__description{
    margin-top: 20px;
    & > h3{
      color: rgb(117 117 117 / 64%);
      font-weight: 300;
    }
  }
  .logo-content{
    display: flex;
    justify-content: center;
    & .logo-img{
      background: white;
      box-shadow: 0px 5px 10px 5px rgb(43 43 43);
      border-radius: 20%;
    }
  }
  .input-container{
    margin-top: 30px;
    & .input-container__content{

      margin-bottom: 20px;
      & input{
        width: 70%;
        border-radius: 7px;
        color: black;
        font-size:15px;
        box-shadow: 0px;
      }
      & select{
        width: 90%;
        padding: 12px;
        border-radius: 7px;
        color: black;
        font-size:15px;
        box-shadow: 0px;
      }
      & option {
        color: black;
      }
    }
  }
  .button-container{
    margin-top: 40px;
    & button{
      box-shadow: none;
      padding: 12px;
      background: #27a0e9;
      width: 80%;
      border-radius: 10px;
      font-size: 15px;
      text-transform: uppercase;
      border: none;
      font-weight: 400;
      cursor: pointer;
      transition: all ease-in 0.2s;
      &:focus{
        outline: none;
      }
      &:active{
        background: rgb(37, 1, 83);
        transform: rotateX(180deg);
      }
    }
  }

</style>
