import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./editPage.styles.scss";
import { NavLink } from "react-router-dom";
import LoginImg from "../../assets/undraw_Login_re_4vu2.svg";

import api from "../../services/api";

export default function EditPage() {
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [skills, setSkills] = useState("");
  const [contacts, setContacts] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const res = localStorage.getItem("user");
    const usr = JSON.parse(res);
    setUser(usr);
    setEmail(usr.email);
    setBio(usr.bio);
    setTwitter(usr.socialMedia.twitter);
    setFacebook(usr.socialMedia.facebook);
    setInstagram(usr.socialMedia.instagram);
    setSkills(usr.skills.join(", "));
    setContacts(usr.contacts.join(", "));
  }, []);

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = new FormData();
      data.append("image", image);
      data.append("email", email);
      data.append("password", password);
      data.append("bio", bio);
      data.append("skills", skills);
      data.append("contacts", contacts);
      data.append("twitter", twitter);
      data.append("facebook", facebook);
      data.append("instagram", instagram);
      const response = await api.put(`users/${user._id}`, data);

      if (response.data._id) {
        alert("Usuário atualizado com sucesso");
        history.push("/");
      }
    } catch (error) {
      alert("Algo deu errado");
    }
  }

  return (
    <div className="registerPageContainer">
      <div className="registerPageSideOne">
        <img className="loginImg" src={LoginImg} alt="Login" />
      </div>

      <div className="registerPageSideTwo">
        <div className="registerPageHeader">
          <span>Have an account?</span>
          <NavLink to="/">Log in</NavLink>
        </div>

        <div className="registerPageInputArea">
          <form className="registerPageForm" onSubmit={(e) => handleSubmit(e)}>
            <h1>Edit your profile</h1>
            <div>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                value={image}
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <textarea
                className="bio"
                type="text"
                placeholder="Your bio here"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <div className="skills">
                <div>
                  <input
                    type="text"
                    placeholder="Twitter username"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Fcebook username"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Instagram username"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="(00)000000000"
                    value={contacts}
                    onChange={(e) => setContacts(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
