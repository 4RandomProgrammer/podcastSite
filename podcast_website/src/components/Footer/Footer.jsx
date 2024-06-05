import { FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='bg-yellow-400 p-10'>
            <h4 className="text-3xl mb-6">Se tudo passa, o que fica?</h4>
            <div className="flex">
                <p>Já se perguntou sobre o verdadeiro sentido da vida? Será que ela é realmente passageira? Somos um grupo de jovens questiionadores que busca as respostas para essas perguntas! Entre nesse bate papo diferente com pessoas que investigam os mistérios da vida e  procuram aprender e se aperfeiçoar. Estes estudantes de logosofia se propõem a extrair o verdadeiro valor das experiências do dia a dia. Afinal, se tudo passa, o que fica?</p>
                <div>
                    <ul>
                    <li>Redes Sociais</li>
                    <li><FaInstagram /><a href="https://www.instagram.com/setudopassaoquefica/" target="_blank" rel="noopener noreferrer">@setudopassaoqfica</a></li>
                    <li><FaYoutube /><a href="https://www.youtube.com/@setudopassaoquefica2934" target="_blank" rel="noopener noreferrer">setudopassaoquefica</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Contato</li>
                        <li><MdEmail />teste@teste.com</li>
                        <li><FaHome />Rua Mundo Transcendente, 1960</li>
                        <li><BsFillTelephoneInboundFill />(11) 11111-1111</li>
                    </ul>
                </div>
            </div>
      </footer>
    )
}

export default Footer;