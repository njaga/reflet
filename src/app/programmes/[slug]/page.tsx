"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Heart, BookOpen, Clock,
  ArrowLeft, Share2, Copy, Check, Eye, MessageCircle, ThumbsUp,
  MapPin, Users, Target, Award, CheckCircle
} from "lucide-react";

export default function ProgrammeDetail({ params }: { readonly params: Promise<{ slug: string }> }) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [programmeViews, setProgrammeViews] = useState(0);

  // Données des programmes (en production, cela viendrait d'une API)
  const programmes = [
    {
      id: 1,
      title: "Formation Leadership et Développement Personnel",
      description: "Formation dispensée par Mme Mbengue au CEDAF de Bambilor pour développer les compétences en leadership des membres du réseau.",
      image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
      duration: "1 jour",
      format: "Présentiel",
      level: "Tous niveaux",
      price: "Gratuit",
      features: [
        "Formation en leadership situationnel",
        "Développement personnel",
        "Renforcement des capacités",
        "Échanges et partage d'expériences",
        "Certification REFLET"
      ],
      schedule: "9 Septembre 2023",
      location: "CEDAF, Bambilor",
      slug: "formation-leadership-developpement-personnel",
      instructor: "Mme Mbengue",
      content: `
        <p>Cette formation intensive en leadership et développement personnel a été conçue spécialement pour les femmes membres du réseau REFLET. Elle vise à renforcer leurs capacités de leadership et à développer leur potentiel personnel.</p>
        
        <h2>Objectifs de la Formation</h2>
        <p>Cette formation vise à :</p>
        <ul>
          <li>Développer les compétences en leadership situationnel</li>
          <li>Renforcer la confiance en soi et l'assertivité</li>
          <li>Améliorer les capacités de communication</li>
          <li>Favoriser l'épanouissement personnel</li>
          <li>Créer un réseau de soutien mutuel</li>
        </ul>
        
        <h2>Méthodologie</h2>
        <p>La formation combine théorie et pratique avec des ateliers interactifs, des études de cas et des exercices de mise en situation adaptés au contexte sénégalais.</p>

        <h2>Résultats Attendus</h2>
        <p>À l'issue de cette formation, les participantes seront capables de :</p>
        <ul>
          <li>Diriger efficacement une équipe</li>
          <li>Prendre des décisions stratégiques</li>
          <li>Communiquer avec impact</li>
          <li>Gérer les conflits de manière constructive</li>
        </ul>
      `,
      tags: ["Leadership", "Développement Personnel", "Formation", "CEDAF", "Bambilor"],
      relatedProgrammes: [
        {
          id: 2,
          title: "Formation Transformation des Produits Locaux",
          image: "/images/actualites/partenariat-ucad.png",
          slug: "formation-transformation-produits-locaux"
        },
        {
          id: 3,
          title: "Actions Sociales et Solidarité",
          image: "/images/actualites/temoignage-khadija-startup.png",
          slug: "actions-sociales-solidarite"
        }
      ]
    },
    {
      id: 2,
      title: "Formation Transformation des Produits Locaux",
      description: "Formation sur la transformation des produits locaux, jus de fruits et sirop dispensée par Mme Fatou GAYE.",
      image: "/images/actualites/partenariat-ucad.png",
      duration: "1 jour",
      format: "Présentiel",
      level: "Débutant",
      price: "Gratuit",
      features: [
        "Transformation des produits locaux",
        "Fabrication de jus de fruits",
        "Production de sirop",
        "Techniques de conservation",
        "Accès aux ressources locales"
      ],
      schedule: "11 Septembre 2023",
      location: "Rufisque",
      slug: "formation-transformation-produits-locaux",
      instructor: "Mme Fatou GAYE",
      content: `
        <p>Cette formation spécialisée permet aux femmes de développer des activités génératrices de revenus en transformant les produits locaux disponibles dans leur région.</p>
        
        <h2>Contenu de la Formation</h2>
        <p>Les participantes apprendront :</p>
        <ul>
          <li>Techniques de transformation des fruits en jus naturels</li>
          <li>Fabrication de sirops artisanaux de qualité</li>
          <li>Méthodes de conservation et conditionnement</li>
          <li>Stratégies de commercialisation</li>
          <li>Gestion financière des micro-entreprises</li>
        </ul>
        
        <h2>Impact Économique</h2>
        <p>Cette formation vise à créer des opportunités économiques durables pour les femmes en valorisant les ressources locales et en développant l'entrepreneuriat féminin.</p>

        <h2>Suivi et Accompagnement</h2>
        <p>Un programme de suivi est mis en place pour accompagner les participantes dans la mise en œuvre de leurs projets de transformation et assurer leur réussite.</p>
      `,
      tags: ["Entrepreneuriat", "Transformation", "Produits Locaux", "Rufisque", "Économie"],
      relatedProgrammes: [
        {
          id: 1,
          title: "Formation Leadership et Développement Personnel",
          image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
          slug: "formation-leadership-developpement-personnel"
        },
        {
          id: 4,
          title: "Financement et Appui aux Membres",
          image: "/images/actualites/financement-membres-reseau.jpeg",
          slug: "financement-appui-membres"
        }
      ]
    },
    {
      id: 3,
      title: "Actions Sociales et Solidarité",
      description: "Programme d'actions sociales envers les femmes en déficit de moyens matériels et financiers.",
      image: "/images/actualites/temoignage-khadija-startup.png",
      duration: "Continue",
      format: "Actions sur le terrain",
      level: "Tous niveaux",
      price: "Gratuit",
      features: [
        "Don de moustiquaires aux sinistrés",
        "Dépistage médical gratuit",
        "Soutien aux femmes vulnérables",
        "Actions de solidarité",
        "Appui aux communautés"
      ],
      schedule: "Selon les besoins",
      location: "Bambilor et environs",
      slug: "actions-sociales-solidarite",
      instructor: "Équipe REFLET",
      content: `
        <p>Le programme d'actions sociales REFLET s'engage activement dans la solidarité communautaire en apportant un soutien concret aux femmes et familles en difficulté.</p>
        
        <h2>Types d'Actions</h2>
        <p>Nos actions sociales incluent :</p>
        <ul>
          <li>Distribution de moustiquaires aux familles sinistrées</li>
          <li>Organisation de journées de dépistage médical gratuit</li>
          <li>Soutien aux femmes vulnérables et leurs enfants</li>
          <li>Actions de solidarité lors de catastrophes naturelles</li>
          <li>Appui aux communautés rurales</li>
        </ul>
        
        <h2>Impact Social</h2>
        <p>Ces actions démontrent l'engagement du réseau REFLET envers sa communauté et contribuent à renforcer les liens de solidarité entre les femmes.</p>

        <h2>Partenariats</h2>
        <p>Nous collaborons avec des institutions locales, des professionnels de santé bénévoles et des organisations communautaires pour maximiser l'impact de nos actions.</p>
      `,
      tags: ["Solidarité", "Action Sociale", "Santé", "Communauté", "Bambilor"],
      relatedProgrammes: [
        {
          id: 4,
          title: "Financement et Appui aux Membres",
          image: "/images/actualites/financement-membres-reseau.jpeg",
          slug: "financement-appui-membres"
        },
        {
          id: 1,
          title: "Formation Leadership et Développement Personnel",
          image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
          slug: "formation-leadership-developpement-personnel"
        }
      ]
    },
    {
      id: 4,
      title: "Financement et Appui aux Membres",
      description: "Programme de financement et d'appui aux membres du réseau pour leur développement économique.",
      image: "/images/actualites/financement-membres-reseau.jpeg",
      duration: "Sur mesure",
      format: "Individuel",
      level: "Membres actifs",
      price: "Gratuit",
      features: [
        "Financement de projets",
        "Appui financier aux membres",
        "Accompagnement personnalisé",
        "Suivi des projets financés",
        "Réseau de soutien"
      ],
      schedule: "25-30 Décembre 2023",
      location: "Théâtre National Daniel Sorano",
      slug: "financement-appui-membres",
      instructor: "Thierno Amadou BA",
      content: `
        <p>Le programme de financement REFLET concrétise l'engagement du réseau envers ses membres en leur apportant un soutien financier et un accompagnement personnalisé.</p>
        
        <h2>Processus de Financement</h2>
        <p>Le financement s'effectue selon un processus rigoureux :</p>
        <ul>
          <li>Sélection des projets éligibles selon des critères définis</li>
          <li>Évaluation des besoins financiers et du potentiel de réussite</li>
          <li>Accompagnement dans la préparation des dossiers</li>
          <li>Déblocage des fonds selon un calendrier établi</li>
          <li>Suivi et évaluation des résultats</li>
        </ul>
        
        <h2>Types de Projets Financés</h2>
        <p>Les projets financés couvrent divers domaines :</p>
        <ul>
          <li>Création d'entreprises et micro-entreprises</li>
          <li>Développement d'activités génératrices de revenus</li>
          <li>Formation et développement des compétences</li>
          <li>Projets sociaux et communautaires</li>
        </ul>

        <h2>Impact et Suivi</h2>
        <p>Un système de suivi rigoureux permet d'accompagner les bénéficiaires et de mesurer l'impact de ces financements sur leur développement économique et social.</p>
      `,
      tags: ["Financement", "Entrepreneuriat", "Développement", "Membres", "Sorano"],
      relatedProgrammes: [
        {
          id: 2,
          title: "Formation Transformation des Produits Locaux",
          image: "/images/actualites/partenariat-ucad.png",
          slug: "formation-transformation-produits-locaux"
        },
        {
          id: 3,
          title: "Actions Sociales et Solidarité",
          image: "/images/actualites/temoignage-khadija-startup.png",
          slug: "actions-sociales-solidarite"
        }
      ]
    }
  ];

  const resolvedParams = React.use(params);
  const programme = programmes.find(p => p.slug === resolvedParams.slug);

  // Fonctions utilitaires
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = programme?.title || '';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        break;
    }
    setIsShareMenuOpen(false);
  };

  // Calculer le progrès de lecture
  useEffect(() => {
    const handleScroll = () => {
      const programmeElement = document.querySelector('.programme-content');
      if (programmeElement) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setReadingProgress(Math.min(scrollPercent, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simuler les vues du programme
  useEffect(() => {
    setProgrammeViews(Math.floor(Math.random() * 500) + 50);
  }, []);

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Programme non trouvé</h1>
          <p className="text-neutral-dark mb-8">Le programme que vous recherchez n'existe pas.</p>
          <Link
            href="/programmes"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Barre de progression de lecture */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section avec image */}
      <section className="relative min-h-[80vh] py-32 flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={programme.image}
            alt={programme.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/90"></div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            className="mb-8"
          >
              <Link
                href="/programmes"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Retour aux programmes
            </Link>
          </motion.div>

            {/* Contenu principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Contenu texte */}
              <div className="lg:col-span-2">
            <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
                    <BookOpen className="mr-2" size={16} />
                    Programme REFLET
                  </div>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                {programme.title}
              </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                    {programme.description}
                  </p>
                </motion.div>

                {/* Métadonnées */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-white/80 mb-8"
                >
                  <div className="flex items-center">
                    <User className="mr-2" size={18} />
                    <span>{programme.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={18} />
                    <span>{programme.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2" size={18} />
                  <span>{programme.duration}</span>
                </div>
                  <div className="flex items-center">
                    <Eye className="mr-2" size={18} />
                    <span>{programmeViews} vues</span>
                </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button
                    onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                    className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                  >
                    <Share2 className="mr-2" size={18} />
                    Partager
                  </button>
                  <Link
                    href="#programme-content"
                    className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    <BookOpen className="mr-2" size={18} />
                    Découvrir le programme
                </Link>
                </motion.div>
              </div>

              {/* Image principale */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
            >
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
                    <div className="relative rounded-xl h-80 overflow-hidden">
                <img
                  src={programme.image}
                  alt={programme.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
          </div>
        </div>

        {/* Menu de partage */}
        {isShareMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 z-20"
          >
            <div className="text-center mb-4">
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">Partager ce programme</h3>
              <p className="text-sm text-neutral-dark">{programme.title}</p>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleShare('facebook')}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Partager sur Facebook"
                aria-label="Partager sur Facebook"
              >
                <span className="text-lg font-bold">f</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                title="Partager sur Twitter"
                aria-label="Partager sur Twitter"
              >
                <span className="text-lg font-bold">𝕏</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                title="Partager sur LinkedIn"
                aria-label="Partager sur LinkedIn"
              >
                <span className="text-lg font-bold">in</span>
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                title="Copier le lien"
                aria-label="Copier le lien"
              >
                {isCopied ? <Check size={20} /> : <Copy size={20} />}
              </button>
                </div>
              </motion.div>
        )}

        {/* Overlay pour fermer le menu */}
        {isShareMenuOpen && (
          <button
            className="absolute inset-0 z-10 w-full h-full bg-transparent border-none cursor-default"
            onClick={() => setIsShareMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsShareMenuOpen(false);
              }
            }}
            aria-label="Fermer le menu de partage"
          />
        )}
      </section>

      {/* Programme Content */}
      <section id="programme-content" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Informations du programme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-primary/5 rounded-xl p-6 text-center">
                  <Clock className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">Durée</h3>
                  <p className="text-neutral-dark">{programme.duration}</p>
                </div>
                <div className="bg-secondary/5 rounded-xl p-6 text-center">
                  <Users className="mx-auto mb-3 text-secondary" size={32} />
                  <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Format</h3>
                  <p className="text-neutral-dark">{programme.format}</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 text-center">
                  <Target className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">Niveau</h3>
                  <p className="text-neutral-dark">{programme.level}</p>
                </div>
                <div className="bg-secondary/5 rounded-xl p-6 text-center">
                  <Award className="mx-auto mb-3 text-secondary" size={32} />
                  <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Prix</h3>
                  <p className="text-neutral-dark font-bold">{programme.price}</p>
                </div>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-3 text-primary" size={24} />
                    <h3 className="font-heading text-xl font-semibold text-primary">Planning</h3>
                  </div>
                  <p className="text-neutral-dark">{programme.schedule}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="mr-3 text-primary" size={24} />
                    <h3 className="font-heading text-xl font-semibold text-primary">Lieu</h3>
                  </div>
                  <p className="text-neutral-dark">{programme.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Contenu principal */}
            <div className="flex gap-8">
              {/* Actions flottantes */}
              <div className="hidden lg:block w-16">
                <div className="sticky top-24 space-y-4">
                  <button className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg">
                    <ThumbsUp size={20} />
                  </button>
                  <button className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-lg">
                    <MessageCircle size={20} />
                  </button>
                  <button 
                    onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                    className="w-12 h-12 bg-gray-100 text-neutral-dark rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Contenu principal */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="programme-content"
                >
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-heading prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-neutral-dark prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-neutral-dark prose-li:mb-2 prose-strong:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: programme.content }}
                  />
                </motion.div>

                {/* Fonctionnalités */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-16"
                >
                  <h3 className="font-heading text-2xl font-bold text-primary mb-8">Ce que vous apprendrez</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programme.features.map((feature) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center p-4 bg-primary/5 rounded-lg"
                      >
                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                        <span className="text-neutral-dark">{feature}</span>
              </motion.div>
            ))}
          </div>
                </motion.div>

                {/* Tags et Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
                  className="mt-16 pt-8 border-t border-gray-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Tags */}
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-primary mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {programme.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions sociales */}
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-neutral-dark rounded-lg hover:bg-gray-200 transition-colors">
                        <ThumbsUp size={16} />
                        <span>J'aime</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-neutral-dark rounded-lg hover:bg-gray-200 transition-colors">
                        <MessageCircle size={16} />
                        <span>Commenter</span>
                      </button>
                      <button 
                        onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Share2 size={16} />
                        <span>Partager</span>
                      </button>
                    </div>
            </div>
          </motion.div>

                {/* Related Programmes */}
                {programme.relatedProgrammes && programme.relatedProgrammes.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 pt-8 border-t border-gray-200"
                  >
                    <div className="text-center mb-12">
                      <h3 className="font-heading text-3xl font-bold text-primary mb-4">Programmes Connexes</h3>
                      <p className="text-neutral-dark text-lg">Découvrez d'autres programmes qui pourraient vous intéresser</p>
                    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {programme.relatedProgrammes.map((relatedProgramme, index) => (
              <motion.div
                          key={relatedProgramme.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Link
                            href={`/programmes/${relatedProgramme.slug}`}
                            className="group block"
                          >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                              <div className="relative h-48 overflow-hidden">
                                <img
                                  src={relatedProgramme.image}
                                  alt={relatedProgramme.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                  <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                    Programme connexe
                                  </span>
                                </div>
                              </div>
                              <div className="p-6">
                                <h4 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                                  {relatedProgramme.title}
                                </h4>
                                <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                                  <span className="text-sm font-medium">Découvrir le programme</span>
                                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                                </div>
                              </div>
                </div>
                  </Link>
                        </motion.div>
                      ))}
                </div>
              </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-10"></div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
                <Heart className="mr-2" size={16} />
                Rejoignez REFLET
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Prête à Transformer Votre Leadership ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines de femmes qui ont déjà transformé leur vie professionnelle avec REFLET
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  S'inscrire maintenant
                </Link>
                <Link
                  href="/programmes"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <BookOpen className="mr-2" size={20} />
                  Voir tous les programmes
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}