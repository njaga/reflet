"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, ArrowLeft, Shield, Lock, UserX
} from "lucide-react";

export default function Forbidden403() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4 pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Icône d'erreur */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
              <Shield className="text-orange-600" size={64} />
            </div>
          </div>

          {/* Code d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-heading text-8xl md:text-9xl font-bold text-orange-600 mb-4">
              403
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Message d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Accès interdit
            </h2>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Vous n'avez pas les permissions nécessaires pour accéder à cette ressource. 
              Veuillez contacter l'administrateur si vous pensez qu'il s'agit d'une erreur.
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
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2" size={20} />
              Retour à l'accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
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
            <h3 className="font-heading text-lg font-semibold text-orange-600 mb-4">
              Pourquoi cette erreur ?
            </h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <Lock className="mr-3 mt-1 text-orange-600" size={20} />
                <p className="text-neutral-dark">
                  Cette page nécessite des permissions spéciales
                </p>
              </div>
              <div className="flex items-start">
                <UserX className="mr-3 mt-1 text-orange-600" size={20} />
                <p className="text-neutral-dark">
                  Votre compte n'a pas les droits d'accès requis
                </p>
              </div>
              <div className="flex items-start">
                <Shield className="mr-3 mt-1 text-orange-600" size={20} />
                <p className="text-neutral-dark">
                  La ressource est protégée par des restrictions d'accès
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
              >
                <Shield className="mr-2" size={16} />
                Demander l'accès
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
