import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "../../redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { fade } from "../../constants/variants";

// Layout of the actual app for loading app state
export default function AppLoading() {
  const { loading, background } = useAppSelector(
    (state) => state.theme.current
  );
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fade}
        transition={{ duration: 0.5 }}
        data-testid="loading-element"
        className={`w-screen h-screen flex flex-col relative p-4 overflow-hidden sm:p-8`}
        style={{ backgroundColor: background }}
      >
        <SkeletonTheme
          baseColor={loading.base}
          highlightColor={loading.highlight}
          borderRadius={50}
        >
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <Skeleton height={30} width={30} />
              <Skeleton height={30} width={120} />
            </div>
            <div className="lg:flex gap-2 hidden">
              <Skeleton height={30} width={100} />
              <Skeleton height={30} width={100} />
            </div>
            <Skeleton
              height={30}
              width={30}
              count={5}
              containerClassName="lg:flex gap-1 hidden"
            />
            <div className="lg:hidden">
              <Skeleton height={30} width={30} borderRadius={5} />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <Skeleton
              containerClassName="flex flex-col w-4/5 max-w-[500px]"
              count={3}
              height={35}
              className="-mt-4"
            />
            <Skeleton height={30} width={120} />
          </div>

          {/* Button Layout */}

          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-2">
            <div className="w-full sm:w-52">
              <Skeleton height={40} />
            </div>
            <div className="w-full sm:w-32">
              <Skeleton height={40} borderRadius={5} />
            </div>
          </div>
        </SkeletonTheme>
      </motion.div>
    </AnimatePresence>
  );
}
