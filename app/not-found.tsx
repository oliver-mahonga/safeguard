import SiteShell from '@/components/site-shell';
import { Button, CallButton } from '@/components/ui';

export default function NotFound() {
  return (
    <SiteShell>
      <section className="wrap flex min-h-[55vh] flex-col justify-center py-20">
        <p className="display text-[0.95rem] text-hazard">Page not found</p>
        <h1 className="mt-3 max-w-2xl text-[2.4rem] leading-[1.05] sm:text-[3rem]">
          This page moved, but the technicians did not.
        </h1>
        <p className="measure mt-4 text-[1.02rem] leading-[1.7] text-ink-soft">
          Head back to the treatments, or call and tell us what you are dealing with.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/services" tone="ink">
            See treatments
          </Button>
          <CallButton tone="outline" />
        </div>
      </section>
    </SiteShell>
  );
}