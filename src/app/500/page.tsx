"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, Server, AlertTriangle, RefreshCw
} from "lucide-react";

export default function ServerError500() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4 pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Icône d'erreur */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center">
              <Server className="text-red-600" size={64} />
            </div>
          </div>

          {/* Code d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-heading text-8xl md:text-9xl font-bold text-red-600 mb-4">
              500
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Message d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Erreur serveur interne
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Nous rencontrons actuellement des difficultés techniques. 
              Notre équipe a été notifiée et travaille à résoudre le problème.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="mr-2" size={20} />
              Recharger la page
            </button>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              <Home className="mr-2" size={20} />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Informations supplémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="font-heading text-lg font-semibold text-red-600 mb-4">
              Que se passe-t-il ?
            </h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <Server className="mr-3 mt-1 text-red-600" size={20} />
                <p className="text-neutral-dark">
                  Nos serveurs rencontrent un problème temporaire
                </p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 text-red-600" size={20} />
                <p className="text-neutral-dark">
                  L'équipe technique a été automatiquement notifiée
                </p>
              </div>
              <div className="flex items-start">
                <RefreshCw className="mr-3 mt-1 text-red-600" size={20} />
                <p className="text-neutral-dark">
                  Le problème devrait être résolu dans quelques minutes
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Si le problème persiste, n'hésitez pas à nous contacter.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <AlertTriangle className="mr-2" size={16} />
                Signaler le problème
              </Link>
            </div>
          </motion.div>

          {/* Statut du service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200"
          >
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-700 font-medium">Service temporairement indisponible</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
