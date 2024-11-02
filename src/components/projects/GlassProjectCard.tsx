// src/components/projects/GlassProjectCard.tsx
import { motion } from 'framer-motion';
import FloatingElement from '../effects/FloatingElement';

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function GlassProjectCard({ title, description, image, tags, link }: Props) {
  return (
    <FloatingElement>
      <motion.div
        whileHover={{ y: -5 }}
        className="glass p-6 rounded-2xl overflow-hidden hover-lift"
      >
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <h3 className="text-xl font-bold mb-2 gradient-text gradient-text-primary">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm glass rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </motion.div>
    </FloatingElement>
  );
}