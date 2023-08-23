
public abstract class FonteDeDados {
  protected String endereco;

  public FonteDeDados(String endereco) {
    this.endereco = endereco;
  }

  public String proximoDado() {
    throw new UnsupportedOperationException("Not implemented");
  }

  public boolean possuiDado() {
    throw new UnsupportedOperationException("Not implemented");
  }
}
