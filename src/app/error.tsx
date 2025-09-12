"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, RefreshCw, AlertTriangle, Bug
} from "lucide-react";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur pour le debugging
    console.error('Erreur application:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4 pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Icône d'erreur */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
              <Bug className="text-red-600" size={64} />
            </div>
          </div>

          {/* Message d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-red-600 mb-4">
              Oups ! Une erreur s'est produite
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-neutral-dark leading-relaxed mb-4">
              Nous nous excusons pour ce désagrément. Une erreur inattendue s'est produite.
            </p>
            {error.digest && (
              <p className="text-sm text-gray-500 font-mono">
                ID d'erreur: {error.digest}
              </p>
            )}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={reset}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="mr-2" size={20} />
              Réessayer
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="font-heading text-lg font-semibold text-red-600 mb-4">
              Que faire maintenant ?
            </h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">1</span>
                </div>
                <p className="text-neutral-dark">
                  Cliquez sur "Réessayer" pour recharger la page
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">2</span>
                </div>
                <p className="text-neutral-dark">
                  Retournez à la page d'accueil si le problème persiste
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">3</span>
                </div>
                <p className="text-neutral-dark">
                  Contactez-nous si l'erreur se reproduit
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <AlertTriangle className="mr-2" size={16} />
                Signaler un problème
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
