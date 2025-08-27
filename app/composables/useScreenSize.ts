// composable to receive current window size: name: mobile, tablet, desktop.
// And exact pixel size
import { useWindowSize } from "@vueuse/core";
import { ref, computed } from "vue";

interface ScreenSizes {
  name: string;
  breakpoint: number;
}

const screenSizes = ref<ScreenSizes[]>([
  { name: "mobile", breakpoint: 480 },
  { name: "tablet", breakpoint: 992 },
  { name: "desktop", breakpoint: 1400 },
]);

export const useUseScreenSize = () => {
  const { width } = useWindowSize();

  const currentDevice = computed<string | undefined>(() => {
    // Default to largest screen size
    if (screenSizes.value && screenSizes.value.length > 0) {
      const lastSize = screenSizes.value[screenSizes.value.length - 1];
      if (!lastSize) return undefined;

      let current = lastSize.name;

      // Find the appropriate screen size based on width
      for (const size of screenSizes.value) {
        if (width.value < size.breakpoint) {
          current = size.name;
          break;
        }
      }

      return current;
    }

    return undefined;
  });

  return {
    width: width,
    device: currentDevice,
  };
};
