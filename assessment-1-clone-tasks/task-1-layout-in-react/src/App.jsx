
import './App.css'

import logo from '../assets/logo.svg'
import allEncores from '../assets/all-encores.jpg'
import articulation from '../assets/articulation.jpg'
import blurred from '../assets/blurred.jpg'
import encores2 from '../assets/encores-2.jpg'
import profilePicture from '../assets/profile_picture.jpg'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

// Main React component for the Erased Tapes page
function App() {
  return (
    <div className="page">

      {/* Website header */}
      <header>
        <img
          src={logo}
          alt="Erased Tapes logo"
          width="100"
        />

        <h1>Erased Tapes</h1>

        <nav aria-label="Main navigation">
          <a href="#blog">Our Blog</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>
      </header>

      <main>
        <article id="blog">

          <h2>Erased Tapes: Exploring the Sonic Frontier</h2>

          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            Mi eu scelerisque turpis posuere tempor?
            Leo condimentum himenaeos molestie elit;
            maximus iaculis proin nulla.
            Ullamcorper nibh cras conubia suscipit dapibus
            sagittis, facilisi habitant vivamus.
            Etiam fusce posuere himenaeos ipsum commodo
            sollicitudin himenaeos nec.
          </p>

          {/* Three-column article layout */}
          <div className="article-grid">

            {/* First column */}
            <section>
              <h3>Heading</h3>

              <p>
                Montes ridiculus mus tellus nunc vulputate.
                Cras facilisi congue et facilisis porttitor
                litora etiam praesent porttitor.
                Sollicitudin cubilia scelerisque diam taciti
                lacus. Dapibus penatibus augue dapibus sagittis;
                rhoncus accumsan. Accumsan urna et, ultrices
                placerat justo rutrum. Tristique mattis ante
                cras accumsan convallis phasellus fermentum magna.
              </p>

              <p>
                Laoreet volutpat hendrerit est aliquam;
                fusce quam tempor. Nisi interdum praesent
                pellentesque non non blandit cubilia et.
                Aptent maximus vehicula nullam odio tempor.
              </p>
            </section>

            {/* Second column */}
            <section>
              <h3>Heading</h3>

              <p>
                Habitasse ornare fames facilisis montes pulvinar
                habitasse fringilla. Risus porta cursus duis
                vivamus quam adipiscing nec.
                Ante at posuere eget aptent natoque vivamus ante.
                Aenean enim dapibus viverra sem efficitur.
                Felis nam semper integer justo in.
                Facilisi augue urna torquent lacinia facilisi
                inceptos. Natoque varius feugiat massa
                scelerisque natoque, cras tempor inceptos.
              </p>

              <p>
                Amet ac leo, imperdiet hac litora auctor.
                Suscipit congue duis sociosqu auctor euismod
                vivamus urna diam. Nunc enim himenaeos litora
                facilisi, tincidunt torquent.
                Eros sapien laoreet duis, volutpat rutrum
                pulvinar. Natoque semper sapien aptent quis
                habitant aliquam condimentum luctus.
                Tempus pellentesque congue varius dapibus
                pharetra. Fermentum diam auctor bibendum
                rhoncus leo. Vestibulum tincidunt fames
                convallis ligula semper porttitor.
              </p>

              <p>
                Magnis maximus morbi, litora accumsan vivamus
                facilisi etiam pharetra.
                Platea congue orci sagittis purus scelerisque.
                Velit taciti maecenas praesent nam lobortis
                metus vehicula habitasse porttitor.
                Porta gravida placerat lobortis litora elit
                feugiat venenatis. Cras magna himenaeos
                consequat aliquet ad nec pharetra.
                Ligula eleifend imperdiet aptent primis placerat.
                Nec magnis tempus vulputate ipsum ad sagittis mus.
              </p>
            </section>

            {/* Third column */}
            <section>
              <h3>Heading</h3>

              <p>
                Vulputate nullam tempus montes eu tellus
                integer adipiscing pulvinar.
                Pharetra eu luctus id a potenti.
                Pulvinar egestas conubia ante varius lobortis
                iaculis metus. Netus sem imperdiet hendrerit
                vehicula netus est gravida tortor.
                Nunc ridiculus per montes nulla, facilisis
                lacinia per leo. Hendrerit scelerisque nulla
                in suspendisse sit tortor sagittis.
                Suscipit dictumst ipsum laoreet cras egestas
                suscipit orci. Per molestie felis erat platea
                blandit commodo.
              </p>

              <p>
                Ad venenatis sapien habitant posuere donec
                porttitor vel nisi.
                Sodales laoreet donec diam rhoncus lectus
                euismod orci torquent curae.
                Fames rhoncus torquent sed convallis;
                potenti cras. Dictumst arcu libero nulla
                malesuada mi ridiculus platea.
                Interdum ullamcorper fringilla himenaeos mollis;
                in arcu pharetra massa.
                Nunc mauris taciti montes sapien molestie
                orci ac quis.
              </p>
            </section>

          </div>

          {/* Album artwork gallery */}
          <section
            className="image-gallery"
            id="artists"
            aria-label="Album artwork gallery"
          >
            <img
              src={allEncores}
              alt="All Encores album artwork"
              className="gallery-large"
            />

            <img
              src={articulation}
              alt="Articulation album artwork"
            />

            <img
              src={blurred}
              alt="Blurred album artwork"
            />

            <img
              src={encores2}
              alt="Encores album artwork"
            />

            <img
              src={profilePicture}
              alt="Artist profile picture"
            />
          </section>

          {/* Author information */}
          <section className="author" id="story">
            <h2>The Author</h2>

            <p>
              Sapien leo scelerisque per convallis torquent nunc.
              Lobortis eleifend a nam sit turpis nostra.
              Tempus suspendisse libero curae faucibus lobortis
              litora bibendum praesent!
              Eget quam magna, diam commodo interdum sapien magnis.
            </p>

            <img
              src={profilePicture}
              alt="Author profile"
              width="90"
            />

            <div className="social-links">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <img src={facebookIcon} alt="" width="24" />
              </a>

              <a href="https://www.instagram.com/" aria-label="Instagram">
                <img src={instagramIcon} alt="" width="24" />
              </a>

              <a href="https://x.com/" aria-label="X">
                <img src={twitterIcon} alt="" width="24" />
              </a>
            </div>
          </section>

          {/* Comments section */}
          <section className="comments">
            <h2>Comments</h2>

            <div className="comment">
              <h3>soundseeker92</h3>
              <p>
                This article beautifully captures the essence
                of experimental sound. Erased Tapes is truly
                pushing boundaries. Makes me want to revisit
                Nils Frahm's early work. I wonder what you
                think about their older stuff?
              </p>
            </div>

            <div className="comment">
              <h3>Ted Baker</h3>
              <p>
                I've been following the label for years—so
                glad someone's finally writing about their
                impact.
              </p>
            </div>

            <div className="comment">
              <h3>Queen_of_noise</h3>
              <p>
                I discovered Erased Tapes through Ólafur
                Arnalds—this article brought back memories
                and be and my friends listening together.
                A bit too poetic for my taste, but still
                compelling.
              </p>
            </div>
          </section>

        </article>
      </main>

      {/* Website footer */}
      <footer className="article-footer">
        <nav aria-label="Footer navigation">
          <a href="#blog">Our Blog</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>

        <p>Copyright © 2023 Erased Disks Ltd.</p>

        <div className="social-links">
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <img src={facebookIcon} alt="" width="24" />
          </a>

          <a href="https://www.instagram.com/" aria-label="Instagram">
            <img src={instagramIcon} alt="" width="24" />
          </a>

          <a href="https://x.com/" aria-label="X">
            <img src={twitterIcon} alt="" width="24" />
          </a>
        </div>
      </footer>

    </div>
  )
}

export default App
