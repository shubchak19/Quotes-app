import { themes } from "../../../constants/theme";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { closeMenu } from "../../../redux/slices/menuSlice";
import { setTheme } from "../../../redux/slices/themeSlice";
import Button from "../buttons/Button";

export default function Themes({ size = 16 }: { size?: number }) {
  const currentTheme = useAppSelector((state) => state.theme.current);
  const dispatch = useAppDispatch();

  function handleClick(index: number) {
    dispatch(setTheme(index));
    dispatch(closeMenu());
  }

  return (
    <div className="flex items-center themes">
      {themes.map((theme, index) => {
        const isActive = currentTheme.name === theme.name;
        return (
          <div
            key={theme.name}
            data-title={`${theme.name} theme`}
            onClick={() => handleClick(index)}
            className="p-2 cursor-pointer"
          >
            <Button
              variant="round"
              size={size}
              color={theme.color}
              customclass={
                isActive
                  ? "outline outline-3 outline-orange-500 outline-offset-2"
                  : ""
              }
            />
          </div>
        );
      })}
    </div>
  );
}
