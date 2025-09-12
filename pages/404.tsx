import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, ArrowLeft, Search, AlertTriangle, RefreshCw
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4 pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Icône d'erreur */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="text-primary" size={64} />
            </div>
          </div>

          {/* Code d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          {/* Message d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Page non trouvée
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Vérifiez l'URL ou retournez à la page d'accueil.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2" size={20} />
              Retour à l'accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Page précédente
            </button>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <h3 className="font-heading text-xl font-semibold text-primary mb-6">
              Pages populaires
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/programmes"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Search className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary">Programmes</h4>
                  <p className="text-sm text-neutral-dark">Découvrez nos formations</p>
                </div>
              </Link>
              <Link
                href="/actualites"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <RefreshCw className="text-secondary" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-secondary">Actualités</h4>
                  <p className="text-sm text-neutral-dark">Nos dernières nouvelles</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
