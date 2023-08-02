import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const highlight = {
  baseColor: "#b8b6b6",
  highlightColor: "#c9c9c9",
};

function PageSkeleton() {
  return (
    <div className="h-screen overflow-hidden w-full">
      <div className="relative flex h-14 w-full">
        <Skeleton className="h-14 absolut" />
        <div className="flex justify-between w-full px-6">
          <div className="flex items-center gap-4 p-2">
            <Skeleton className="h-6 w-6" {...highlight} />
            <Skeleton className="h-6 w-6" {...highlight} />
            <Skeleton className="h-6 w-6" {...highlight} />
            <Skeleton className="h-6 w-6" {...highlight} />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-6" {...highlight} />
            <Skeleton className="h-6 w-6" {...highlight} />
          </div>
        </div>
      </div>
      <main className="relative h-[calc(100%-56px)]">
        <div className="relative h-full w-40 mt-1 hidden md:block">
          <Skeleton className="h-full absolute top-0 left-0" />
          <Skeleton
            {...highlight}
            className="absolute h-7 z-10 w-8/12 left-1/2 -translate-x-1/2"
          />
          <div className="h-full mt-4 absolute flex flex-col gap-3 items-center z-10 w-32 left-1/2 -translate-x-1/2">
            <Skeleton {...highlight} className="h-10 w-24 " />
            <Skeleton {...highlight} className="h-10 w-24 " />
            <Skeleton {...highlight} className="h-10 w-24 " />
            <Skeleton {...highlight} className="h-10 w-24 " />
            <Skeleton {...highlight} className="h-10 w-24 " />
            <Skeleton {...highlight} className="h-10 w-24 " />
            <Skeleton {...highlight} className="h-10 w-24 " />
          </div>
        </div>
        <div className="absolute h-[85%] w-[80%]  mx-auto sm:w-[330px] left-1/2 md:left-[calc(50%+50px)] -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Skeleton className="absolute h-full w-full  left-1/2 -translate-x-1/2 " />
          <Skeleton
            {...highlight}
            className="h-32 w-[80%] md:w-[70%] top-10 right-1/2 translate-x-1/2"
          />
        </div>
        <div className="h-full w-[250px] absolute mt-1 left-0 top-0  hidden md:block">
          <Skeleton className="h-full w-full absolute" />
          <div className="absolute flex flex-col gap-3 items-center z-10 w-32 left-1/2 -translate-x-1/2 h-full">
            <Skeleton className="h-10 w-48" {...highlight} />
            <div>
              <Skeleton
                className="h-6 w-32 mb-1 right-1/2 translate-x-1/2"
                {...highlight}
              />
              <Skeleton className="h-36 w-48" {...highlight} />
            </div>

            <Skeleton className="h-10 w-48" {...highlight} />
            <Skeleton className="h-10 w-48" {...highlight} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageSkeleton;
