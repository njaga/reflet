import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/reflet-logo.jpg"
                alt="REFLET Logo"
                width={50}
                height={50}
                className="rounded-full shadow-lg"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Réseau des Femmes Leaders autour de Thierno - Excellence et leadership féminin au Sénégal.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-white/80 hover:text-secondary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-white/80 hover:text-secondary transition-colors">
                  Équipe
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-white/80 hover:text-secondary transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-white/80 hover:text-secondary transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/80">
              <p>Dakar, Sénégal</p>
              <p>Email: contact@reflet.sn</p>
              <p>Tél: +221 77 247 29 29</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 REFLET. Tous droits réservés.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Développé par <a href="https://kamit.tech" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium">Kamit</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
