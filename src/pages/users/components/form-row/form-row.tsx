import { type ReactElement } from 'react';
import styles from './form-row.module.scss';
import type { FieldError } from 'react-hook-form';

type Props = {
  children: ReactElement<{ id: string }>;
  label?: string;
  error?: FieldError;
  isOptional?: boolean;
};

export const FormRow = ({ label, error, children, isOptional = false }: Props) => (
  <div className={styles.row}>
    {label && (
      <label className={styles.rowLabel} htmlFor={children.props.id}>
        {label} {isOptional ? <span>(optional)</span> : ''}
      </label>
    )}
    {children}
    {error && <span className={styles.rowError}>{error.message}</span>}
  </div>
);
