import { SystemPageContainer } from '@/components/system/system-page-container';

export default function Loading() {
  return (
    <SystemPageContainer>
      <div className="mx-auto max-w-2xl w-full">
        {/* Skeleton Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 sm:p-12 lg:p-16 shadow-lg">
          {/* Skeleton Heading */}
          <div className="h-16 bg-border/30 rounded-lg mb-6 animate-pulse" />
          
          {/* Skeleton Description */}
          <div className="space-y-3 mb-8">
            <div className="h-6 bg-border/20 rounded-lg animate-pulse" />
            <div className="h-6 bg-border/20 rounded-lg animate-pulse w-3/4" />
          </div>
          
          {/* Skeleton Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 bg-border/20 rounded-lg animate-pulse w-full sm:w-48" />
            <div className="h-12 bg-border/20 rounded-lg animate-pulse w-full sm:w-48" />
          </div>
        </div>
      </div>
    </SystemPageContainer>
  );
}
