function OnTriggerEnter (info : Collider){
    Destory(gameObject);
    CoinSystem.coninscollect += 1;
}