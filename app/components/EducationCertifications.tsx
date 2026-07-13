import { certifications, education } from "@/app/lib/data";

export default function EducationCertifications() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">
          Education
        </h3>
        <div className="flex items-start gap-3">
          <i
            className="ri-graduation-cap-line text-xl text-ink/40"
            aria-hidden="true"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-ink">
              {education.institution}
            </p>
            <p className="text-sm text-ink/70">{education.degree}</p>
            <p className="text-xs text-ink/50">{education.year}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">
          Certifications
        </h3>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-start gap-3">
              <i
                className="ri-award-line text-xl text-ink/40"
                aria-hidden="true"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{cert.name}</p>
                <p className="text-sm text-ink/70">{cert.issuer}</p>
                <p className="text-xs text-ink/50">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
