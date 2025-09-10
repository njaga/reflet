"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Heart, BookOpen, Clock,
  ArrowLeft, Mail
} from "lucide-react";

export default function ArticleDetail({ params }: { readonly params: { slug: string } }) {
  // Données des articles (en production, cela viendrait d'une API)
  const articles = [
    {
      id: 1,
      title: "REFLET célèbre 5 ans d'impact sur le leadership féminin au Sénégal",
      excerpt: "Notre réseau a accompagné plus de 150 femmes dans leur parcours de leadership et d'entrepreneuriat. Découvrez nos réalisations et nos projets d'avenir.",
      author: "Aminata Diallo",
      date: "15 Décembre 2024",
      category: "Actualités",
      readTime: "5 min",
      image: "/images/actualites/reflet-5-ans-celebration.jpg",
      featured: true,
      slug: "reflet-celebre-5-ans-impact-leadership-feminin-senegal",
      content: `
        <p>Il y a cinq ans, REFLET naissait d'une vision audacieuse : transformer le paysage du leadership féminin au Sénégal. Aujourd'hui, nous célébrons non seulement notre anniversaire, mais surtout l'impact extraordinaire que nous avons eu sur la vie de plus de 150 femmes leaders.</p>
        
        <h2>Un Parcours Rempli de Succès</h2>
        <p>Depuis notre création en 2019, REFLET a accompagné des femmes de tous horizons dans leur développement personnel et professionnel. Nos programmes ont permis :</p>
        <ul>
          <li>La formation de 150+ femmes leaders</li>
          <li>La création de 25+ entreprises par nos membres</li>
          <li>Un taux de satisfaction de 95%</li>
          <li>Plus de 50 partenariats stratégiques</li>
        </ul>

        <h2>Des Témoignages Inspirants</h2>
        <p>Khadija Ndiaye, fondatrice de TechWomen Senegal, témoigne : "REFLET m'a donné les outils et la confiance nécessaires pour lancer mon entreprise. Aujourd'hui, j'emploie 15 personnes et j'inspire d'autres femmes à suivre leurs rêves."</p>

        <h2>Nos Projets d'Avenir</h2>
        <p>Pour les cinq prochaines années, REFLET s'engage à :</p>
        <ul>
          <li>Étendre nos programmes à toutes les régions du Sénégal</li>
          <li>Développer des formations en ligne accessibles</li>
          <li>Créer un fonds d'investissement pour les entrepreneures</li>
          <li>Établir des partenariats internationaux</li>
        </ul>

        <h2>Rejoignez Notre Mission</h2>
        <p>L'aventure REFLET ne fait que commencer. Si vous partagez notre vision d'un leadership féminin fort et transformateur, rejoignez-nous dans cette mission passionnante.</p>
      `,
      tags: ["Leadership", "Féminin", "Sénégal", "Entrepreneuriat", "Impact"],
      relatedArticles: [
        {
          id: 2,
          title: "Nouveau programme : Leadership Transformationnel pour les jeunes femmes",
          image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
          slug: "nouveau-programme-leadership-transformationnel-jeunes-femmes"
        },
        {
          id: 4,
          title: "Témoignage : Comment Khadija a lancé sa startup grâce à REFLET",
          image: "/images/actualites/temoignage-khadija-startup.jpg",
          slug: "temoignage-khadija-lance-startup-grace-reflet"
        }
      ]
    }
  ];

  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Article non trouvé</h1>
          <Link href="/actualites" className="text-secondary hover:underline">Retour aux actualités</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/actualites" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Retour aux actualités
            </Link>
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="mr-2" size={16} />
              {article.category}
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              {article.excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-white/90"
            >
              <div className="flex items-center">
                <User className="mr-2" size={18} />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={18} />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Partager :</span>
                <button className="hover:text-secondary transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Principale */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu de l'Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-neutral-dark font-medium">Tags :</span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={`tag-${tag}`}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Connexes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="mr-2" size={16} />
              Articles Connexes
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Découvrez Aussi
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              D'autres articles qui pourraient vous intéresser
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {article.relatedArticles.map((relatedArticle, index) => (
              <motion.article
                key={`related-${relatedArticle.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-3 line-clamp-2 leading-tight">
                      {relatedArticle.title}
                    </h3>
                    <a
                      href={`/actualites/${relatedArticle.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
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
                Inspirée par Cet Article ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez notre communauté de femmes leaders et transformez votre carrière
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  Nous rejoindre
                </a>
                <a
                  href="/programmes"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <BookOpen className="mr-2" size={20} />
                  Découvrir nos programmes
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
