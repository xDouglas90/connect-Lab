import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 48px;
  gap: 28px;
  background: var(--common-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 50%;
`;
