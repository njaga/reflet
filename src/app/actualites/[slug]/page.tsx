"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Heart, BookOpen, Clock,
  ArrowLeft, Mail, Share2, Copy, Check, Eye, MessageCircle, ThumbsUp
} from "lucide-react";

export default function ArticleDetail({ params }: { readonly params: Promise<{ slug: string }> }) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [articleViews, setArticleViews] = useState(0);

  // Données des articles (en production, cela viendrait d'une API)
  const articles = [
    {
      id: 1,
      title: "Deuxième édition de l'anniversaire du réseau REFLET",
      excerpt: "Conférence à l'UCAD II sur le leadership féminin dans l'éducation : le rôle éducatif de la femme dans une société en mutation.",
      author: "Binta Ndiaye BA",
      date: "21 Décembre 2024",
      category: "Événements",
      readTime: "5 min",
      image: "/images/actualites/reflet-5-ans-celebration.jpg",
      featured: true,
      slug: "deuxieme-edition-anniversaire-reseau-reflet",
      content: `
        <p>Le réseau REFLET a célébré sa deuxième édition d'anniversaire avec une conférence exceptionnelle à l'UCAD II, mettant en lumière le rôle crucial de la femme dans l'éducation et le leadership.</p>
        
        <h2>Une Conférence Inspirante</h2>
        <p>Cette conférence a rassemblé plus de 200 participants, incluant des femmes leaders, des étudiantes, des professionnelles de l'éducation et des représentants d'institutions académiques. Le thème central était "Le rôle éducatif de la femme dans une société en mutation".</p>
        
        <h2>Intervenantes de Renom</h2>
        <p>Plusieurs personnalités éminentes ont pris part à cette conférence :</p>
        <ul>
          <li>Dr. Fatou Sarr, Rectrice de l'UCAD</li>
          <li>Mme Aminata Diallo, Ministre de l'Éducation</li>
          <li>Prof. Mariama Ba, Spécialiste en leadership féminin</li>
        </ul>

        <h2>Impact et Perspectives</h2>
        <p>Cette conférence a permis de sensibiliser sur l'importance du leadership féminin dans l'éducation et de créer des synergies entre les différentes institutions pour promouvoir l'égalité des genres dans le secteur éducatif.</p>
      `,
      tags: ["Leadership", "Éducation", "Féminin", "Conférence", "UCAD"],
      relatedArticles: [
        {
          id: 2,
          title: "Formation Leadership et Développement Personnel",
          image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
          slug: "formation-leadership-developpement-personnel"
        },
        {
          id: 5,
          title: "Lancement Officiel du Réseau REFLET",
          image: "/images/actualites/formation-gestion-financiere.jpg",
          slug: "lancement-officiel-reseau-reflet"
        }
      ]
    },
    {
      id: 2,
      title: "Formation Leadership et Développement Personnel",
      excerpt: "Formation dispensée par Mme Mbengue au CEDAF de Bambilor pour développer les compétences en leadership des membres du réseau.",
      author: "Yandé Gaye",
      date: "9 Septembre 2023",
      category: "Formations",
      readTime: "3 min",
      image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
      featured: false,
      slug: "formation-leadership-developpement-personnel",
      content: `
        <p>Une formation intensive en leadership et développement personnel a été organisée au CEDAF de Bambilor, dispensée par l'expert Mme Mbengue.</p>
        
        <h2>Objectifs de la Formation</h2>
        <p>Cette formation visait à renforcer les capacités des membres du réseau REFLET dans les domaines suivants :</p>
        <ul>
          <li>Développement des compétences en leadership</li>
          <li>Gestion d'équipe et communication</li>
          <li>Prise de décision stratégique</li>
          <li>Confiance en soi et assertivité</li>
        </ul>
        
        <h2>Méthodologie</h2>
        <p>La formation a combiné théorie et pratique avec des ateliers interactifs, des études de cas et des exercices de mise en situation.</p>

        <h2>Résultats</h2>
        <p>Les participantes ont exprimé une grande satisfaction et ont pu immédiatement appliquer les connaissances acquises dans leurs domaines respectifs.</p>
      `,
      tags: ["Formation", "Leadership", "Développement", "CEDAF", "Bambilor"],
      relatedArticles: [
        {
          id: 7,
          title: "Formation Leadership par Mr BACHIR",
          image: "/images/actualites/formation-leadership-bachir.jpg",
          slug: "formation-leadership-bachir-cedaf"
        },
        {
          id: 3,
          title: "Formation Transformation des Produits Locaux",
          image: "/images/actualites/partenariat-ucad.png",
          slug: "formation-transformation-produits-locaux"
        }
      ]
    },
    {
      id: 3,
      title: "Formation Transformation des Produits Locaux",
      excerpt: "Formation sur la transformation des produits locaux, jus de fruits et sirop dispensée par Mme Fatou GAYE à Rufisque.",
      author: "Fatou GAYE",
      date: "11 Septembre 2023",
      category: "Formations",
      readTime: "4 min",
      image: "/images/actualites/partenariat-ucad.png",
      featured: false,
      slug: "formation-transformation-produits-locaux",
      content: `
        <p>Une formation spécialisée sur la transformation des produits locaux a été organisée à Rufisque, animée par l'experte Mme Fatou GAYE.</p>
        
        <h2>Contenu de la Formation</h2>
        <p>Les participantes ont appris les techniques de :</p>
        <ul>
          <li>Transformation des fruits en jus naturels</li>
          <li>Fabrication de sirops artisanaux</li>
          <li>Conservation et conditionnement</li>
          <li>Commercialisation des produits transformés</li>
        </ul>
        
        <h2>Impact Économique</h2>
        <p>Cette formation a permis aux participantes de développer des activités génératrices de revenus et de valoriser les ressources locales.</p>

        <h2>Suivi et Accompagnement</h2>
        <p>Un programme de suivi a été mis en place pour accompagner les participantes dans la mise en œuvre de leurs projets de transformation.</p>
      `,
      tags: ["Formation", "Transformation", "Produits Locaux", "Entrepreneuriat", "Rufisque"],
      relatedArticles: [
        {
          id: 2,
          title: "Formation Leadership et Développement Personnel",
          image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
          slug: "formation-leadership-developpement-personnel"
        },
        {
          id: 6,
          title: "Don de Moustiquaires aux Sinistrés de Bambilor",
          image: "/images/actualites/forum-femmes-leaders-afrique.jpg",
          slug: "don-moustiquaires-sinistres-bambilor"
        }
      ]
    },
    {
      id: 4,
      title: "Journée Dépistage Cancer du Col de l'Utérus",
      excerpt: "Journée de dépistage gratuite du cancer du col de l'utérus et cancer du sein au poste de santé de Bambilor.",
      author: "Équipe REFLET",
      date: "30 Octobre 2023",
      category: "Santé",
      readTime: "3 min",
      image: "/images/actualites/temoignage-khadija-startup.png",
      featured: false,
      slug: "journee-depistage-cancer-col-uterus",
      content: `
        <p>Le réseau REFLET a organisé une journée de dépistage gratuite pour sensibiliser les femmes de Bambilor aux cancers féminins.</p>
        
        <h2>Services Proposés</h2>
        <p>Cette journée a offert :</p>
        <ul>
          <li>Dépistage gratuit du cancer du col de l'utérus</li>
          <li>Dépistage gratuit du cancer du sein</li>
          <li>Consultations médicales</li>
          <li>Sensibilisation sur la prévention</li>
        </ul>
        
        <h2>Partenaires Médicaux</h2>
        <p>L'événement a été organisé en collaboration avec le poste de santé de Bambilor et des professionnels de santé bénévoles.</p>

        <h2>Impact</h2>
        <p>Plus de 150 femmes ont bénéficié de ces services de dépistage, contribuant à la prévention et au diagnostic précoce des cancers féminins.</p>
      `,
      tags: ["Santé", "Dépistage", "Cancer", "Prévention", "Bambilor"],
      relatedArticles: [
        {
          id: 12,
          title: "Journée Don à l'Hôpital des Enfants de Diamniadio",
          image: "/images/actualites/don-hopital-enfants-diamniadio.jpg",
          slug: "journee-don-hopital-enfants-diamniadio"
        },
        {
          id: 6,
          title: "Don de Moustiquaires aux Sinistrés de Bambilor",
          image: "/images/actualites/forum-femmes-leaders-afrique.jpg",
          slug: "don-moustiquaires-sinistres-bambilor"
        }
      ]
    },
    {
      id: 5,
      title: "Lancement Officiel du Réseau REFLET",
      excerpt: "Lancement officiel du réseau au Théâtre National Daniel Sorano avec financement de dix membres du réseau.",
      author: "Thierno Amadou BA",
      date: "25 Décembre 2023",
      category: "Événements",
      readTime: "4 min",
      image: "/images/actualites/formation-gestion-financiere.jpg",
      featured: false,
      slug: "lancement-officiel-reseau-reflet",
      content: `
        <p>Le réseau REFLET a été officiellement lancé au Théâtre National Daniel Sorano lors d'une cérémonie mémorable.</p>
        
        <h2>Un Événement Historique</h2>
        <p>Cette cérémonie de lancement a marqué un tournant important dans l'histoire du réseau avec :</p>
        <ul>
          <li>Présentation officielle du réseau</li>
          <li>Financement effectif de dix membres</li>
          <li>Signature de partenariats stratégiques</li>
          <li>Déclaration d'engagement des membres fondateurs</li>
        </ul>
        
        <h2>Prestigieux Partenaires</h2>
        <p>L'événement a été honoré par la présence de personnalités éminentes et de représentants d'institutions partenaires.</p>

        <h2>Vision d'Avenir</h2>
        <p>Ce lancement officiel a posé les bases d'un réseau fort et engagé pour le développement du leadership féminin au Sénégal.</p>
      `,
      tags: ["Lancement", "Officiel", "Théâtre", "Sorano", "Financement"],
      relatedArticles: [
        {
          id: 1,
          title: "Deuxième édition de l'anniversaire du réseau REFLET",
          image: "/images/actualites/reflet-5-ans-celebration.jpg",
          slug: "deuxieme-edition-anniversaire-reseau-reflet"
        },
        {
          id: 8,
          title: "Financement des Dix Membres du Réseau",
          image: "/images/actualites/financement-membres-reseau.jpeg",
          slug: "financement-dix-membres-reseau"
        }
      ]
    },
    {
      id: 6,
      title: "Don de Moustiquaires aux Sinistrés de Bambilor",
      excerpt: "Action sociale parrainée par le Khalife Thierno Amadou BA pour venir en aide aux sinistrés de Bambilor.",
      author: "Thierno Amadou BA",
      date: "7 Septembre 2022",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/forum-femmes-leaders-afrique.jpg",
      featured: false,
      slug: "don-moustiquaires-sinistres-bambilor",
      content: `
        <p>Le réseau REFLET a organisé une action sociale d'envergure pour venir en aide aux familles sinistrées de Bambilor.</p>
        
        <h2>Contexte de l'Action</h2>
        <p>Suite aux inondations qui ont touché Bambilor, le réseau REFLET s'est mobilisé pour :</p>
        <ul>
          <li>Distribuer des moustiquaires aux familles sinistrées</li>
          <li>Fournir des produits de première nécessité</li>
          <li>Apporter un soutien moral aux victimes</li>
          <li>Organiser des activités de sensibilisation</li>
        </ul>
        
        <h2>Mobilisation du Réseau</h2>
        <p>Cette action a été parrainée par le Khalife Thierno Amadou BA et a mobilisé tous les membres du réseau dans un élan de solidarité.</p>

        <h2>Impact Social</h2>
        <p>Plus de 200 familles ont bénéficié de cette aide, démontrant l'engagement du réseau envers sa communauté.</p>
      `,
      tags: ["Action Sociale", "Solidarité", "Bambilor", "Sinistrés", "Moustiquaires"],
      relatedArticles: [
        {
          id: 13,
          title: "Collecte Don pour Dahara de Bambilor Sinistré",
          image: "/images/actualites/collecte-don-dahara-bambilor.jpg",
          slug: "collecte-don-dahara-bambilor-sinistre"
        },
        {
          id: 9,
          title: "Participation à la 31ème Edition Ziara",
          image: "/images/actualites/ziara-31eme-edition.jpeg",
          slug: "participation-31eme-ziara-bambilor"
        }
      ]
    },
    {
      id: 7,
      title: "Formation Leadership par Mr BACHIR",
      excerpt: "Première formation sur le Leadership dispensée par Mr BACHIR au CEDAF de Bambilor, marquant le début des activités du réseau.",
      author: "Mr BACHIR",
      date: "20 Août 2022",
      category: "Formations",
      readTime: "3 min",
      image: "/images/actualites/formation-leadership-bachir.jpg",
      featured: false,
      slug: "formation-leadership-bachir-cedaf",
      content: `
        <p>La première formation officielle du réseau REFLET a été dispensée par Mr BACHIR au CEDAF de Bambilor.</p>
        
        <h2>Une Formation Fondatrice</h2>
        <p>Cette formation historique a marqué le début des activités du réseau avec :</p>
        <ul>
          <li>Introduction aux concepts de leadership</li>
          <li>Développement des compétences managériales</li>
          <li>Techniques de communication efficace</li>
          <li>Gestion des conflits et négociation</li>
        </ul>

        <h2>Expertise de Mr BACHIR</h2>
        <p>Mr BACHIR, expert reconnu en leadership, a partagé son expérience et ses connaissances avec les membres fondateurs du réseau.</p>

        <h2>Fondation du Réseau</h2>
        <p>Cette formation a posé les bases solides du réseau REFLET et a défini les valeurs et principes qui guident encore aujourd'hui ses activités.</p>
      `,
      tags: ["Formation", "Leadership", "BACHIR", "CEDAF", "Fondation"],
      relatedArticles: [
        {
          id: 2,
          title: "Formation Leadership et Développement Personnel",
          image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
          slug: "formation-leadership-developpement-personnel"
        },
        {
          id: 5,
          title: "Lancement Officiel du Réseau REFLET",
          image: "/images/actualites/formation-gestion-financiere.jpg",
          slug: "lancement-officiel-reseau-reflet"
        }
      ]
    },
    {
      id: 8,
      title: "Financement des Dix Membres du Réseau",
      excerpt: "Financement effectif des dix membres du réseau REFLET, concrétisant l'engagement du réseau envers ses membres.",
      author: "Binta Ndiaye BA",
      date: "30 Décembre 2023",
      category: "Financement",
      readTime: "4 min",
      image: "/images/actualites/financement-membres-reseau.jpeg",
      featured: false,
      slug: "financement-dix-membres-reseau",
      content: `
        <p>Le réseau REFLET a concrétisé son engagement envers ses membres en procédant au financement effectif de dix membres.</p>
        
        <h2>Processus de Financement</h2>
        <p>Ce financement s'est déroulé selon un processus rigoureux :</p>
        <ul>
          <li>Sélection des projets éligibles</li>
          <li>Évaluation des besoins financiers</li>
          <li>Accompagnement dans la préparation des dossiers</li>
          <li>Déblocage des fonds selon les critères établis</li>
        </ul>
        
        <h2>Types de Projets Financés</h2>
        <p>Les projets financés couvrent divers domaines :</p>
        <ul>
          <li>Création d'entreprises</li>
          <li>Développement d'activités génératrices de revenus</li>
          <li>Formation et développement des compétences</li>
          <li>Projets sociaux et communautaires</li>
        </ul>

        <h2>Impact et Suivi</h2>
        <p>Un système de suivi a été mis en place pour accompagner les bénéficiaires et mesurer l'impact de ces financements sur leur développement.</p>
      `,
      tags: ["Financement", "Membres", "Projets", "Entrepreneuriat", "Développement"],
      relatedArticles: [
        {
          id: 5,
          title: "Lancement Officiel du Réseau REFLET",
          image: "/images/actualites/formation-gestion-financiere.jpg",
          slug: "lancement-officiel-reseau-reflet"
        },
        {
          id: 3,
          title: "Formation Transformation des Produits Locaux",
          image: "/images/actualites/partenariat-ucad.png",
          slug: "formation-transformation-produits-locaux"
        }
      ]
    },
    {
      id: 9,
      title: "Participation à la 31ème Edition Ziara",
      excerpt: "Participation du réseau REFLET à la 31ème Edition ziara feu Thierno Djiby Ousmane BA à Bambilor en appui à la restauration des pèlerins.",
      author: "Thierno Amadou BA",
      date: "25 Février 2023",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/ziara-31eme-edition.jpeg",
      featured: false,
      slug: "participation-31eme-ziara-bambilor",
      content: `
        <p>Le réseau REFLET a participé activement à la 31ème Edition de la ziara en hommage à feu Thierno Djiby Ousmane BA.</p>
        
        <h2>Engagement du Réseau</h2>
        <p>Les membres du réseau se sont mobilisés pour :</p>
        <ul>
          <li>Appui à la restauration des pèlerins</li>
          <li>Organisation des activités culturelles</li>
          <li>Coordination des services d'accueil</li>
          <li>Participation aux cérémonies religieuses</li>
        </ul>
        
        <h2>Solidarité Communautaire</h2>
        <p>Cette participation démontre l'engagement du réseau envers sa communauté et ses valeurs spirituelles.</p>

        <h2>Impact Social</h2>
        <p>L'implication du réseau a contribué au succès de cette édition et a renforcé les liens communautaires.</p>
      `,
      tags: ["Ziara", "Bambilor", "Spiritualité", "Communauté", "Solidarité"],
      relatedArticles: [
        {
          id: 10,
          title: "Participation à la 32ème Edition Ziara",
          image: "/images/actualites/ziara-32eme-edition.jpg",
          slug: "participation-32eme-ziara-bambilor"
        },
        {
          id: 6,
          title: "Don de Moustiquaires aux Sinistrés de Bambilor",
          image: "/images/actualites/forum-femmes-leaders-afrique.jpg",
          slug: "don-moustiquaires-sinistres-bambilor"
        }
      ]
    },
    {
      id: 10,
      title: "Participation à la 32ème Edition Ziara",
      excerpt: "Participation du réseau REFLET à la 32ème Edition ziara feu Thierno Djiby Ousmane BA à Bambilor en appui à la restauration des pèlerins.",
      author: "Thierno Amadou BA",
      date: "3 Février 2024",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/ziara-32eme-edition.jpg",
      featured: false,
      slug: "participation-32eme-ziara-bambilor",
      content: `
        <p>Le réseau REFLET a renouvelé son engagement lors de la 32ème Edition de la ziara en hommage à feu Thierno Djiby Ousmane BA.</p>
        
        <h2>Continuation de l'Engagement</h2>
        <p>Cette deuxième participation a permis de :</p>
        <ul>
          <li>Renforcer l'appui à la restauration des pèlerins</li>
          <li>Améliorer l'organisation des services</li>
          <li>Développer de nouvelles activités culturelles</li>
          <li>Étendre l'impact social du réseau</li>
        </ul>
        
        <h2>Évolution des Services</h2>
        <p>Fort de l'expérience de l'année précédente, le réseau a pu proposer des services encore plus adaptés aux besoins des pèlerins.</p>

        <h2>Renforcement des Liens</h2>
        <p>Cette participation continue renforce les liens entre le réseau REFLET et sa communauté spirituelle.</p>
      `,
      tags: ["Ziara", "Bambilor", "Spiritualité", "Communauté", "Engagement"],
      relatedArticles: [
        {
          id: 11,
          title: "Participation à la 33ème Edition Ziara",
          image: "/images/actualites/ziara-33eme-edition.jpg",
          slug: "participation-33eme-ziara-bambilor"
        },
        {
          id: 9,
          title: "Participation à la 31ème Edition Ziara",
          image: "/images/actualites/ziara-31eme-edition.jpeg",
          slug: "participation-31eme-ziara-bambilor"
        }
      ]
    },
    {
      id: 11,
      title: "Participation à la 33ème Edition Ziara",
      excerpt: "Participation du réseau REFLET à la 33ème Edition ziara feu Thierno Djiby Ousmane BA à Bambilor en appui à la restauration des pèlerins.",
      author: "Thierno Amadou BA",
      date: "1 Février 2025",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/ziara-33eme-edition.jpg",
      featured: false,
      slug: "participation-33eme-ziara-bambilor",
      content: `
        <p>Le réseau REFLET a participé pour la troisième année consécutive à la ziara en hommage à feu Thierno Djiby Ousmane BA.</p>
        
        <h2>Tradition et Innovation</h2>
        <p>Cette troisième participation a combiné :</p>
        <ul>
          <li>Respect des traditions spirituelles</li>
          <li>Innovation dans l'organisation des services</li>
          <li>Amélioration continue de la qualité d'accueil</li>
          <li>Développement de nouvelles initiatives sociales</li>
        </ul>
        
        <h2>Expertise Acquise</h2>
        <p>L'expérience accumulée au fil des années permet au réseau de proposer des services de plus en plus professionnels et adaptés.</p>

        <h2>Vision d'Avenir</h2>
        <p>Cette participation régulière témoigne de l'engagement durable du réseau envers sa communauté et ses valeurs spirituelles.</p>
      `,
      tags: ["Ziara", "Bambilor", "Spiritualité", "Tradition", "Innovation"],
      relatedArticles: [
        {
          id: 10,
          title: "Participation à la 32ème Edition Ziara",
          image: "/images/actualites/ziara-32eme-edition.jpg",
          slug: "participation-32eme-ziara-bambilor"
        },
        {
          id: 12,
          title: "Journée Don à l'Hôpital des Enfants de Diamniadio",
          image: "/images/actualites/don-hopital-enfants-diamniadio.jpeg",
          slug: "journee-don-hopital-enfants-diamniadio"
        }
      ]
    },
    {
      id: 12,
      title: "Journée Don à l'Hôpital des Enfants de Diamniadio",
      excerpt: "Journée don à l'Hôpital des Enfants de Diamniadio dans le cadre de leur projet l'Art au chevet des malades pour une meilleure prise en charge des enfants malades.",
      author: "Équipe REFLET",
      date: "29 Août 2025",
      category: "Actions Sociales",
      readTime: "4 min",
      image: "/images/actualites/don-hopital-enfants-diamniadio.jpg",
      featured: false,
      slug: "journee-don-hopital-enfants-diamniadio",
      content: `
        <p>Le réseau REFLET a organisé une journée de don à l'Hôpital des Enfants de Diamniadio dans le cadre du projet "L'Art au chevet des malades".</p>
        
        <h2>Objectif du Projet</h2>
        <p>Cette initiative vise à :</p>
        <ul>
          <li>Améliorer la prise en charge des enfants malades</li>
          <li>Apporter du réconfort par l'art et la culture</li>
          <li>Sensibiliser sur les besoins des enfants hospitalisés</li>
          <li>Créer des moments de joie et d'espoir</li>
        </ul>
        
        <h2>Activités Organisées</h2>
        <p>La journée a été marquée par :</p>
        <ul>
          <li>Ateliers artistiques avec les enfants</li>
          <li>Spectacles et animations</li>
          <li>Distribution de jouets et livres</li>
          <li>Moments de partage et d'écoute</li>
        </ul>

        <h2>Impact Humain</h2>
        <p>Cette action a permis d'apporter de la joie et du réconfort aux enfants hospitalisés et à leurs familles.</p>
      `,
      tags: ["Don", "Hôpital", "Enfants", "Diamniadio", "Art"],
      relatedArticles: [
        {
          id: 4,
          title: "Journée Dépistage Cancer du Col de l'Utérus",
          image: "/images/actualites/temoignage-khadija-startup.png",
          slug: "journee-depistage-cancer-col-uterus"
        },
        {
          id: 13,
          title: "Collecte Don pour Dahara de Bambilor Sinistré",
          image: "/images/actualites/collecte-don-dahara-bambilor.jpg",
          slug: "collecte-don-dahara-bambilor-sinistre"
        }
      ]
    },
    {
      id: 13,
      title: "Collecte Don pour Dahara de Bambilor Sinistré",
      excerpt: "Collecte de dons organisée par le réseau REFLET pour venir en aide à Dahara de Bambilor sinistré, démontrant la solidarité du réseau.",
      author: "Équipe REFLET",
      date: "30 Août 2025",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/collecte-don-dahara-bambilor.jpg",
      featured: false,
      slug: "collecte-don-dahara-bambilor-sinistre",
      content: `
        <p>Le réseau REFLET a organisé une collecte de dons pour venir en aide à Dahara, résident de Bambilor touché par un sinistre.</p>
        
        <h2>Mobilisation du Réseau</h2>
        <p>Cette action de solidarité a mobilisé :</p>
        <ul>
          <li>Tous les membres du réseau</li>
          <li>La communauté de Bambilor</li>
          <li>Des partenaires et sympathisants</li>
          <li>Des bénévoles engagés</li>
        </ul>
        
        <h2>Types de Dons Collectés</h2>
        <p>La collecte a permis de rassembler :</p>
        <ul>
          <li>Dons financiers</li>
          <li>Produits de première nécessité</li>
          <li>Vêtements et articles ménagers</li>
          <li>Soutien moral et accompagnement</li>
        </ul>

        <h2>Solidarité Communautaire</h2>
        <p>Cette action démontre la force de la solidarité communautaire et l'engagement du réseau envers ses membres en difficulté.</p>
      `,
      tags: ["Collecte", "Don", "Solidarité", "Bambilor", "Sinistré"],
      relatedArticles: [
        {
          id: 6,
          title: "Don de Moustiquaires aux Sinistrés de Bambilor",
          image: "/images/actualites/forum-femmes-leaders-afrique.jpg",
          slug: "don-moustiquaires-sinistres-bambilor"
        },
        {
          id: 12,
          title: "Journée Don à l'Hôpital des Enfants de Diamniadio",
          image: "/images/actualites/don-hopital-enfants-diamniadio.jpg",
          slug: "journee-don-hopital-enfants-diamniadio"
        }
      ]
    }
  ];

  const resolvedParams = React.use(params);
  const article = articles.find(a => a.slug === resolvedParams.slug);

  // Fonctions utilitaires
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = article?.title || '';
    
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
      const articleElement = document.querySelector('.article-content');
      if (articleElement) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setReadingProgress(Math.min(scrollPercent, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simuler les vues de l'article
  useEffect(() => {
    setArticleViews(Math.floor(Math.random() * 1000) + 100);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article non trouvé</h1>
          <p className="text-neutral-dark mb-8">L'article que vous recherchez n'existe pas.</p>
          <Link
            href="/actualites"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux actualités
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
            src={article.image}
            alt={article.title}
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
                href="/actualites"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Retour aux actualités
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
                <Calendar className="mr-2" size={16} />
                {article.category}
              </div>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                {article.title}
              </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              {article.excerpt}
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
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={18} />
                <span>{article.readTime}</span>
              </div>
                  <div className="flex items-center">
                    <Eye className="mr-2" size={18} />
                    <span>{articleViews} vues</span>
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
                    href="#article-content"
                    className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    <BookOpen className="mr-2" size={18} />
                    Lire l'article
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
                        src={article.image}
                        alt={article.title}
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
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">Partager cet article</h3>
              <p className="text-sm text-neutral-dark">{article.title}</p>
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

      {/* Article Content */}
      <section id="article-content" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Barre latérale avec actions */}
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
                  className="article-content"
                >
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-heading prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-neutral-dark prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-neutral-dark prose-li:mb-2 prose-strong:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </motion.div>
              </div>
            </div>

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
                        {article.tags.map((tag) => (
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

                {/* Related Articles */}
                {article.relatedArticles && article.relatedArticles.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 pt-8 border-t border-gray-200"
                  >
                    <div className="text-center mb-12">
                      <h3 className="font-heading text-3xl font-bold text-primary mb-4">Articles Connexes</h3>
                      <p className="text-neutral-dark text-lg">Découvrez d'autres articles qui pourraient vous intéresser</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {article.relatedArticles.map((relatedArticle, index) => (
                        <motion.div
                          key={relatedArticle.slug}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Link
                            href={`/actualites/${relatedArticle.slug}`}
                            className="group block"
                          >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                              <div className="relative h-48 overflow-hidden">
                                <img
                                  src={relatedArticle.image}
                                  alt={relatedArticle.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                  <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                    Article connexe
                                  </span>
                                </div>
                              </div>
                              <div className="p-6">
                                <h4 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                                  {relatedArticle.title}
                                </h4>
                                <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                                  <span className="text-sm font-medium">Lire l'article</span>
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
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
                Restez Informées de Nos Actualités
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Découvrez nos dernières activités, formations et événements
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/actualites"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="mr-2" size={20} />
                  Voir toutes les actualités
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <Mail className="mr-2" size={20} />
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
