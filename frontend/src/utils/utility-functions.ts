export const dispatchSubmit = (event: React.MouseEvent<HTMLDivElement>) => {
  const parentForm: any = event.currentTarget?.parentNode
  parentForm.submit()
}
