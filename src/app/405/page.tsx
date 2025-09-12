"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, ArrowLeft, Ban, AlertTriangle, Settings
} from "lucide-react";

export default function MethodNotAllowed405() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-4 pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Icône d'erreur */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center">
              <Ban className="text-purple-600" size={64} />
            </div>
          </div>

          {/* Code d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-heading text-8xl md:text-9xl font-bold text-purple-600 mb-4">
              405
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Message d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-purple-600 mb-4">
              Méthode non autorisée
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed">
              La méthode de requête utilisée n'est pas autorisée pour cette ressource. 
              Veuillez utiliser une méthode appropriée ou contacter l'administrateur.
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
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2" size={20} />
              Retour à l'accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Page précédente
            </button>
          </motion.div>

          {/* Informations supplémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="font-heading text-lg font-semibold text-purple-600 mb-4">
              Méthodes autorisées
            </h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <Settings className="mr-3 mt-1 text-purple-600" size={20} />
                <p className="text-neutral-dark">
                  GET - Pour récupérer des données
                </p>
              </div>
              <div className="flex items-start">
                <Ban className="mr-3 mt-1 text-purple-600" size={20} />
                <p className="text-neutral-dark">
                  POST/PUT/DELETE - Non autorisés sur cette ressource
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 text-purple-600" size={20} />
                <p className="text-neutral-dark">
                  Vérifiez que vous utilisez la bonne méthode
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <Settings className="mr-2" size={16} />
                Obtenir de l'aide technique
              </Link>
            </div>
          </motion.div>

          {/* Conseils techniques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200"
          >
            <div className="flex items-center justify-center">
              <Settings className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium text-sm">
                Erreur technique - Contactez le support si nécessaire
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
