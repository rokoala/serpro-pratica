import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;

public class FonteArquivo extends FonteDeDados {
  private List<String> palavras;
  private int index;

  public static void main(String[] args){
    FonteArquivo fonteArquivo = new FonteArquivo("db.txt");
    while(fonteArquivo.possuiDado()){
      System.out.println(fonteArquivo.proximoDado());
    }
  }
  public FonteArquivo(String endereco) {
    super(endereco);
    this.palavras = new ArrayList<String>();
    this.index = 0;
    try{
    BufferedReader bf = new BufferedReader(new FileReader(endereco));
    String linha;
    while((linha = bf.readLine()) != null){
      String[] palavrasLinha = linha.split("\\s+");
      for(String palavra : palavrasLinha){
        this.palavras.add(palavra);
      }
    }
    }catch (IOException e){
      e.printStackTrace();
    }
  }
  public boolean possuiDado(){
   return this.index < this.palavras.size();
  }
  public String proximoDado(){
    String data = this.palavras.get(this.index);
    this.index++;
    return data;
  }
}