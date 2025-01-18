import React, { useState } from 'react';
import "./RegForm.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactFrom = () => {

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [countryCode, setCountryCode] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [countryRegion, setCountryRegion] = useState('');
	const [message, setMessage] = useState('');
	const [isSending, setIsSending] = useState(false);


	const formData = {
		fullName,
		countryCode,
		phoneNo,
		email,
		companyName,
		countryRegion,
		message
	};

	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSending(true);

		// Send the form data to the backend API
		axios.post('https://app.noqu.in/api/contact-form', formData)
			.then((_response) => {
				navigate('/Submit');
				console.log("Email sent successfully")
				setIsSending(false);
			})
			.catch((error) => {
				navigate('/submit-fail');
				console.error(error);
				setIsSending(false);
			});
	};
	return (
		<div className="ContactForm">
			<form onSubmit={handleSubmit} className="reg-form">
				<div className="contact-form-head">
					<h3>CONTACT</h3>
					<h2>GET IN TOUCH</h2>
				</div>
				<div className='CareerForm_row'>
					<label>Full Name <span>*</span></label>
					<input
						type="text"
						name="fullName"
						value={fullName}
						onChange={(event) => setFullName(event.target.value)}
						required
					/>
				</div>
				<div className='Countrycode'>
					<label>Phone No <span>*</span></label>
					<div className="ph_input">
						<div className="CountryCode_box">
							<select name='countryCode'
								className="Country-code"
								value={countryCode}
								onChange={(event) => setCountryCode(event.target.value)}
								required>
								<option value="">Select an option</option>
								<option value='+91'>+91</option>
								<option value='+1-242'>+1-242</option>
								<option value='+1-246'>+1-246</option>
								<option value='+1-264'>+1-264</option>
								<option value='+1-268'>+1-268</option>
								<option value='+1-284'>+1-284</option>
								<option value='+1-340'>+1-340</option>
								<option value='+1-345'>+1-345</option>
								<option value='+1-441'>+1-441</option>
								<option value='+1-473'>+1-473</option>
								<option value='+1-649'>+1-649</option>
								<option value='+1-664'>+1-664</option>
								<option value='+1-670'>+1-670</option>
								<option value='+1-671'>+1-671</option>
								<option value='+1-684'>+1-684</option>
								<option value='+1-758'>+1-758</option>
								<option value='+1-767'>+1-767</option>
								<option value='+1-784'>+1-784</option>
								<option value='+1-787 or +1-939'>+1-787 or +1-939</option>
								<option value='+1-809 and +1-829'>+1-809 and +1-829</option>
								<option value='+1-868'>+1-868</option>
								<option value='+1-869'>+1-869</option>
								<option value='+1-876'>+1-876</option>
								<option value='+20'>+20</option>
								<option value='+212'>+212</option>
								<option value='+213'>+213</option>
								<option value='+216'>+216</option>
								<option value='+218'>+218</option>
								<option value='+220'>+220</option>
								<option value='+221'>+221</option>
								<option value='+222'>+222</option>
								<option value='+223'>+223</option>
								<option value='+224'>+224</option>
								<option value='+225'>+225</option>
								<option value='+226'>+226</option>
								<option value='+227'>+227</option>
								<option value='+229'>+229</option>
								<option value='+230'>+230</option>
								<option value='+231'>+231</option>
								<option value='+232'>+232</option>
								<option value='+233'>+233</option>
								<option value='+234'>+234</option>
								<option value='+235'>+235</option>
								<option value='+236'>+236</option>
								<option value='+237'>+237</option>
								<option value='+238'>+238</option>
								<option value='+239'>+239</option>
								<option value='+240'>+240</option>
								<option value='+241'>+241</option>
								<option value='+242'>+242</option>
								<option value='+243'>+243</option>
								<option value='+244'>+244</option>
								<option value='+245'>+245</option>
								<option value='+248'>+248</option>
								<option value='+249'>+249</option>
								<option value='+250'>+250</option>
								<option value='+251'>+251</option>
								<option value='+252'>+252</option>
								<option value='+253'>+253</option>
								<option value='+254'>+254</option>
								<option value='+255'>+255</option>
								<option value='+256'>+256</option>
								<option value='+257'>+257</option>
								<option value='+258'>+258</option>
								<option value='+260'>+260</option>
								<option value='+261'>+261</option>
								<option value='+262'>+262</option>
								<option value='+263'>+263</option>
								<option value='+264'>+264</option>
								<option value='+265'>+265</option>
								<option value='+266'>+266</option>
								<option value='+267'>+267</option>
								<option value='+268'>+268</option>
								<option value='+269'>+269</option>
								<option value='+27'>+27</option>
								<option value='+290'>+290</option>
								<option value='+291'>+291</option>
								<option value='+297'>+297</option>
								<option value='+298'>+298</option>
								<option value='+299'>+299</option>
								<option value='+30'>+30</option>
								<option value='+31'>+31</option>
								<option value='+32'>+32</option>
								<option value='+33'>+33</option>
								<option value='+34'>+34</option>
								<option value='+350'>+350</option>
								<option value='+351'>+351</option>
								<option value='+352'>+352</option>
								<option value='+353'>+353</option>
								<option value='+354'>+354</option>
								<option value='+355'>+355</option>
								<option value='+356'>+356</option>
								<option value='+357'>+357</option>
								<option value='+358'>+358</option>
								<option value='+359'>+359</option>
								<option value='+36'>+36</option>
								<option value='+370'>+370</option>
								<option value='+371'>+371</option>
								<option value='+372'>+372</option>
								<option value='+373'>+373</option>
								<option value='+374'>+374</option>
								<option value='+375'>+375</option>
								<option value='+376'>+376</option>
								<option value='+377'>+377</option>
								<option value='+378'>+378</option>
								<option value='+380'>+380</option>
								<option value='+385'>+385</option>
								<option value='+386'>+386</option>
								<option value='+387'>+387</option>
								<option value='+389'>+389</option>
								<option value='+39'>+39</option>
								<option value='+40'>+40</option>
								<option value='+41'>+41</option>
								<option value='+418'>+418</option>
								<option value='+420'>+420</option>
								<option value='+421'>+421</option>
								<option value='+423'>+423</option>
								<option value='+43'>+43</option>
								<option value='+44'>+44</option>
								<option value='+45'>+45</option>
								<option value='+46'>+46</option>
								<option value='+47'>+47</option>
								<option value='+48'>+48</option>
								<option value='+49'>+49</option>
								<option value='+500'>+500</option>
								<option value='+501'>+501</option>
								<option value='+502'>+502</option>
								<option value='+503'>+503</option>
								<option value='+504'>+504</option>
								<option value='+505'>+505</option>
								<option value='+506'>+506</option>
								<option value='+507'>+507</option>
								<option value='+508'>+508</option>
								<option value='+509'>+509</option>
								<option value='+51'>+51</option>
								<option value='+52'>+52</option>
								<option value='+53'>+53</option>
								<option value='+54'>+54</option>
								<option value='+55'>+55</option>
								<option value='+56'>+56</option>
								<option value='+57'>+57</option>
								<option value='+58'>+58</option>
								<option value='+590'>+590</option>
								<option value='+591'>+591</option>
								<option value='+592'>+592</option>
								<option value='+593 '>+593 </option>
								<option value='+594'>+594</option>
								<option value='+595'>+595</option>
								<option value='+596'>+596</option>
								<option value='+597'>+597</option>
								<option value='+598'>+598</option>
								<option value='+599'>+599</option>
								<option value='+60'>+60</option>
								<option value='+61'>+61</option>
								<option value='+62'>+62</option>
								<option value='+63'>+63</option>
								<option value='+64'>+64</option>
								<option value='+65'>+65</option>
								<option value='+66'>+66</option>
								<option value='+670'>+670</option>
								<option value='+672'>+672</option>
								<option value='+673'>+673</option>
								<option value='+674'>+674</option>
								<option value='+675'>+675</option>
								<option value='+676'>+676</option>
								<option value='+677'>+677</option>
								<option value='+678'>+678</option>
								<option value='+679'>+679</option>
								<option value='+680'>+680</option>
								<option value='+681'>+681</option>
								<option value='+682'>+682</option>
								<option value='+683'>+683</option>
								<option value='+685'>+685</option>
								<option value='+686'>+686</option>
								<option value='+687'>+687</option>
								<option value='+688'>+688</option>
								<option value='+689'>+689</option>
								<option value='+690'>+690</option>
								<option value='+691'>+691</option>
								<option value='+692'>+692</option>
								<option value='+7'>+7</option>
								<option value='+81'>+81</option>
								<option value='+82'>+82</option>
								<option value='+84'>+84</option>
								<option value='+850'>+850</option>
								<option value='+852'>+852</option>
								<option value='+853'>+853</option>
								<option value='+855'>+855</option>
								<option value='+856'>+856</option>
								<option value='+86'>+86</option>
								<option value='+880'>+880</option>
								<option value='+886'>+886</option>
								<option value='+90'>+90</option>
								<option value='+91' selected>+91</option>
								<option value='+92'>+92</option>
								<option value='+93'>+93</option>
								<option value='+94'>+94</option>
								<option value='+95'>+95</option>
								<option value='+960'>+960</option>
								<option value='+961'>+961</option>
								<option value='+962'>+962</option>
								<option value='+963'>+963</option>
								<option value='+964'>+964</option>
								<option value='+965'>+965</option>
								<option value='+966'>+966</option>
								<option value='+967'>+967</option>
								<option value='+968'>+968</option>
								<option value='+970'>+970</option>
								<option value='+971'>+971</option>
								<option value='+972'>+972</option>
								<option value='+973'>+973</option>
								<option value='+974'>+974</option>
								<option value='+975'>+975</option>
								<option value='+976'>+976</option>
								<option value='+977'>+977</option>
								<option value='+98'>+98</option>
								<option value='+992'>+992</option>
								<option value='+993'>+993</option>
								<option value='+994'>+994</option>
								<option value='+995'>+995</option>
								<option value='+996'>+996</option>
								<option value='+998'>+998</option>
							</select>
						</div>
						<input
							type="text"
							name="phoneNo"
							value={phoneNo}
							onChange={(event) => setPhoneNo(event.target.value)}
							pattern="\d+"
							required
						/>
					</div>
				</div>
				<div className='CareerForm_row'>
					<label>Email <span>*</span></label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>
				</div>

				<div className='CareerForm_row'>
					<label>Company Name</label>
					<input
						type="text"
						name="companyName"
						value={companyName}
						onChange={(event) => setCompanyName(event.target.value)}
						required
					/>
				</div>
				<div className='CareerForm_row'>
					<label>Country Region</label>
					<div className="Select">
						<select name="countryRegion" value={countryRegion} onChange={(event) => setCountryRegion(event.target.value)} required>
							<option value="">Select an option</option>
							<option selected="">Country Region</option>
							<option value="India">India</option>
							<option value='Afghanistan'>	Afghanistan	</option>
							<option value='Albania'>	Albania	</option>
							<option value='Algeria'>	Algeria	</option>
							<option value='Andorra'>	Andorra	</option>
							<option value='Angola'>	Angola	</option>
							<option value='Antigua and Barbuda'>	Antigua and Barbuda	</option>
							<option value='Argentina'>	Argentina	</option>
							<option value='Armenia'>	Armenia	</option>
							<option value='Australia'>	Australia	</option>
							<option value='Austria'>	Austria	</option>
							<option value='Azerbaijan'>	Azerbaijan	</option>
							<option value='The Bahamas'>	The Bahamas	</option>
							<option value='Bahrain'>	Bahrain	</option>
							<option value='Bangladesh'>	Bangladesh	</option>
							<option value='Barbados'>	Barbados	</option>
							<option value='Belarus'>	Belarus	</option>
							<option value='Belgium'>	Belgium	</option>
							<option value='Belize'>	Belize	</option>
							<option value='Benin'>	Benin	</option>
							<option value='Bhutan'>	Bhutan	</option>
							<option value='Bolivia'>	Bolivia	</option>
							<option value='Bosnia and Herzegovina'>	Bosnia and Herzegovina	</option>
							<option value='Botswana'>	Botswana	</option>
							<option value='Brazil'>	Brazil	</option>
							<option value='Brunei'>	Brunei	</option>
							<option value='Bulgaria'>	Bulgaria	</option>
							<option value='Burkina Faso'>	Burkina Faso	</option>
							<option value='Burundi'>	Burundi	</option>
							<option value='Cabo Verde'>	Cabo Verde	</option>
							<option value='Cambodia'>	Cambodia	</option>
							<option value='Cameroon'>	Cameroon	</option>
							<option value='Canada'>	Canada	</option>
							<option value='Central African Republic'>	Central African Republic	</option>
							<option value='Chad'>	Chad	</option>
							<option value='Chile'>	Chile	</option>
							<option value='China'>	China	</option>
							<option value='Colombia'>	Colombia	</option>
							<option value='Comoros'>	Comoros	</option>
							<option value='Congo, Democratic Republic of the'>	Congo, Democratic Republic of the	</option>
							<option value='Congo, Republic of the'>	Congo, Republic of the	</option>
							<option value='Costa Rica'>	Costa Rica	</option>
							<option value='Côte d’Ivoire'>	Côte d’Ivoire	</option>
							<option value='Croatia'>	Croatia	</option>
							<option value='Cuba'>	Cuba	</option>
							<option value='Cyprus'>	Cyprus	</option>
							<option value='Czech Republic'>	Czech Republic	</option>
							<option value='Denmark'>	Denmark	</option>
							<option value='Djibouti'>	Djibouti	</option>
							<option value='Dominica'>	Dominica	</option>
							<option value='Dominican Republic'>	Dominican Republic	</option>
							<option value='East Timor (Timor-Leste)'>	East Timor (Timor-Leste)	</option>
							<option value='Ecuador'>	Ecuador	</option>
							<option value='Egypt'>	Egypt	</option>
							<option value='El Salvador'>	El Salvador	</option>
							<option value='Equatorial Guinea'>	Equatorial Guinea	</option>
							<option value='Eritrea'>	Eritrea	</option>
							<option value='Estonia'>	Estonia	</option>
							<option value='Eswatini'>	Eswatini	</option>
							<option value='Ethiopia'>	Ethiopia	</option>
							<option value='Fiji'>	Fiji	</option>
							<option value='Finland'>	Finland	</option>
							<option value='France'>	France	</option>
							<option value='Gabon'>	Gabon	</option>
							<option value='The Gambia'>	The Gambia	</option>
							<option value='Georgia'>	Georgia	</option>
							<option value='Germany'>	Germany	</option>
							<option value='Ghana'>	Ghana	</option>
							<option value='Greece'>	Greece	</option>
							<option value='Grenada'>	Grenada	</option>
							<option value='Guatemala'>	Guatemala	</option>
							<option value='Guinea'>	Guinea	</option>
							<option value='Guinea-Bissau'>	Guinea-Bissau	</option>
							<option value='Guyana'>	Guyana	</option>
							<option value='Haiti'>	Haiti	</option>
							<option value='Honduras'>	Honduras	</option>
							<option value='Hungary'>	Hungary	</option>
							<option value='Iceland'>	Iceland	</option>
							<option value='India'>	India	</option>
							<option value='Indonesia'>	Indonesia	</option>
							<option value='Iran'>	Iran	</option>
							<option value='Iraq'>	Iraq	</option>
							<option value='Ireland'>	Ireland	</option>
							<option value='Israel'>	Israel	</option>
							<option value='Italy'>	Italy	</option>
							<option value='Jamaica'>	Jamaica	</option>
							<option value='Japan'>	Japan	</option>
							<option value='Jordan'>	Jordan	</option>
							<option value='Kazakhstan'>	Kazakhstan	</option>
							<option value='Kenya'>	Kenya	</option>
							<option value='Kiribati'>	Kiribati	</option>
							<option value='Korea, North'>	Korea, North	</option>
							<option value='Korea, South'>	Korea, South	</option>
							<option value='Kosovo'>	Kosovo	</option>
							<option value='Kuwait'>	Kuwait	</option>
							<option value='Kyrgyzstan'>	Kyrgyzstan	</option>
							<option value='Laos'>	Laos	</option>
							<option value='Latvia'>	Latvia	</option>
							<option value='Lebanon'>	Lebanon	</option>
							<option value='Lesotho'>	Lesotho	</option>
							<option value='Liberia'>	Liberia	</option>
							<option value='Libya'>	Libya	</option>
							<option value='Liechtenstein'>	Liechtenstein	</option>
							<option value='Lithuania'>	Lithuania	</option>
							<option value='Luxembourg'>	Luxembourg	</option>
							<option value='Madagascar'>	Madagascar	</option>
							<option value='Malawi'>	Malawi	</option>
							<option value='Malaysia'>	Malaysia	</option>
							<option value='Maldives'>	Maldives	</option>
							<option value='Mali'>	Mali	</option>
							<option value='Malta'>	Malta	</option>
							<option value='Marshall Islands'>	Marshall Islands	</option>
							<option value='Mauritania'>	Mauritania	</option>
							<option value='Mauritius'>	Mauritius	</option>
							<option value='Mexico'>	Mexico	</option>
							<option value='Micronesia, Federated States of'>	Micronesia, Federated States of	</option>
							<option value='Moldova'>	Moldova	</option>
							<option value='Monaco'>	Monaco	</option>
							<option value='Mongolia'>	Mongolia	</option>
							<option value='Montenegro'>	Montenegro	</option>
							<option value='Morocco'>	Morocco	</option>
							<option value='Mozambique'>	Mozambique	</option>
							<option value='Myanmar (Burma)'>	Myanmar (Burma)	</option>
							<option value='Namibia'>	Namibia	</option>
							<option value='Nauru'>	Nauru	</option>
							<option value='Nepal'>	Nepal	</option>
							<option value='Netherlands'>	Netherlands	</option>
							<option value='New Zealand'>	New Zealand	</option>
							<option value='Nicaragua'>	Nicaragua	</option>
							<option value='Niger'>	Niger	</option>
							<option value='Nigeria'>	Nigeria	</option>
							<option value='North Macedonia'>	North Macedonia	</option>
							<option value='Norway'>	Norway	</option>
							<option value='Oman'>	Oman	</option>
							<option value='Pakistan'>	Pakistan	</option>
							<option value='Palau'>	Palau	</option>
							<option value='Panama'>	Panama	</option>
							<option value='Papua New Guinea'>	Papua New Guinea	</option>
							<option value='Paraguay'>	Paraguay	</option>
							<option value='Peru'>	Peru	</option>
							<option value='Philippines'>	Philippines	</option>
							<option value='Poland'>	Poland	</option>
							<option value='Portugal'>	Portugal	</option>
							<option value='Qatar'>	Qatar	</option>
							<option value='Romania'>	Romania	</option>
							<option value='Russia'>	Russia	</option>
							<option value='Rwanda'>	Rwanda	</option>
							<option value='Saint Kitts and Nevis'>	Saint Kitts and Nevis	</option>
							<option value='Saint Lucia'>	Saint Lucia	</option>
							<option value='Saint Vincent and the Grenadines'>	Saint Vincent and the Grenadines	</option>
							<option value='Samoa'>	Samoa	</option>
							<option value='San Marino'>	San Marino	</option>
							<option value='Sao Tome and Principe'>	Sao Tome and Principe	</option>
							<option value='Saudi Arabia'>	Saudi Arabia	</option>
							<option value='Senegal'>	Senegal	</option>
							<option value='Serbia'>	Serbia	</option>
							<option value='Seychelles'>	Seychelles	</option>
							<option value='Sierra Leone'>	Sierra Leone	</option>
							<option value='Singapore'>	Singapore	</option>
							<option value='Slovakia'>	Slovakia	</option>
							<option value='Slovenia'>	Slovenia	</option>
							<option value='Solomon Islands'>	Solomon Islands	</option>
							<option value='Somalia'>	Somalia	</option>
							<option value='South Africa'>	South Africa	</option>
							<option value='Spain'>	Spain	</option>
							<option value='Sri Lanka'>	Sri Lanka	</option>
							<option value='Sudan'>	Sudan	</option>
							<option value='Sudan, South'>	Sudan, South	</option>
							<option value='Suriname'>	Suriname	</option>
							<option value='Sweden'>	Sweden	</option>
							<option value='Switzerland'>	Switzerland	</option>
							<option value='Syria'>	Syria	</option>
							<option value='Taiwan'>	Taiwan	</option>
							<option value='Tajikistan'>	Tajikistan	</option>
							<option value='Tanzania'>	Tanzania	</option>
							<option value='Thailand'>	Thailand	</option>
							<option value='Togo'>	Togo	</option>
							<option value='Tonga'>	Tonga	</option>
							<option value='Trinidad and Tobago'>	Trinidad and Tobago	</option>
							<option value='Tunisia'>	Tunisia	</option>
							<option value='Turkey'>	Turkey	</option>
							<option value='Turkmenistan'>	Turkmenistan	</option>
							<option value='Tuvalu'>	Tuvalu	</option>
							<option value='Uganda'>	Uganda	</option>
							<option value='Ukraine'>	Ukraine	</option>
							<option value='United Arab Emirates'>	United Arab Emirates	</option>
							<option value='United Kingdom'>	United Kingdom	</option>
							<option value='United States'>	United States	</option>
							<option value='Uruguay'>	Uruguay	</option>
							<option value='Uzbekistan'>	Uzbekistan	</option>
							<option value='Vanuatu'>	Vanuatu	</option>
							<option value='Vatican City'>	Vatican City	</option>
							<option value='Venezuela'>	Venezuela	</option>
							<option value='Vietnam'>	Vietnam	</option>
							<option value='Yemen'>	Yemen	</option>
							<option value='Zambia'>	Zambia	</option>
							<option value='Zimbabwe'>	Zimbabwe	</option>
						</select>
					</div>
				</div>
				<div className='CareerForm_row'>
					<label>Message</label>
					<textarea
						type="textarea"
						name="message"
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						required
					/>
				</div>
				<div className="reg-form-submit">
					<button type="submit" disabled={isSending} >{isSending ? 'Submitting...' : 'Submit'}</button>
				</div>
			</form>
		</div>
	)
}

export default ContactFrom;
