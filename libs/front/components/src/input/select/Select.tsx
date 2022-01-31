import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  FormHelperText,
} from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

import { t } from '@translations';

export type SelectItem = {
  key?: number;
  text: string;
};

export interface SelectProps<T> extends UseControllerProps<T> {
  label: string;
  data?: SelectItem[];
}

export function Select<T>({
  label,
  data,
  ...controllerProps
}: SelectProps<T>): JSX.Element | null {
  const {
    field: { value, onChange, ...othersProps },
    fieldState,
  } = useController(controllerProps);
  const { name } = controllerProps;

  if (!data) {
    return null;
  }

  return (
    <FormControl fullWidth size="small" error={!!fieldState.error}>
      <InputLabel id={`${name}-select`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${name}-select`}
        id={`${name}-select-helper`}
        size="small"
        onChange={(e) => {
          onChange(e.target.value === '' ? undefined : e.target.value);
        }}
        value={value || ''}
        {...othersProps}
        label={label}
      >
        {data.map(({ key, text }) => (
          <MenuItem key={key ?? -1} value={key}>
            {text}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>{t(fieldState.error?.message)}</FormHelperText>
    </FormControl>
  );
}
